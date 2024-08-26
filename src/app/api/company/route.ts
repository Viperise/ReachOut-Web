import { NextRequest, NextResponse } from 'next/server';

interface CompanyData {
  name: string;
  description: string;
  document_number: string;
  email: string;
  activity: string;
  phone: {
    number: string;
    isCallable: boolean;
    isWhatsapp: boolean;
    isTelegram: boolean;
  };
}

export async function POST(req: NextRequest) {
  try {
    const data: CompanyData = await req.json();
    const token = req.cookies.get('token');

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/company`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to create company' }, { status: response.status });
    }

    const responseData = await response.json();
    return NextResponse.json(responseData, { status: 201 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token');

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(req.url);
    const companyId = url.pathname.split('/').pop();
    const queryParams = url.search;

    if (companyId && companyId !== 'company') {
      // Fetch single company details
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/company/${companyId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        return NextResponse.json({ message: 'Failed to fetch company' }, { status: response.status });
      }

      const companyData = await response.json();
      return NextResponse.json(companyData, { status: 200 });
    } else {
      // Fetch list of companies
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/company${queryParams}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        return NextResponse.json({ message: 'Failed to fetch companies' }, { status: response.status });
      }

      const companies = await response.json();
      return NextResponse.json(companies, { status: 200 });
    }
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const token = req.cookies.get('token');

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(req.url);
    const companyId = url.pathname.split('/').pop();

    if (!companyId || companyId === 'company') {
      return NextResponse.json({ message: 'Company ID is required' }, { status: 400 });
    }

    const data = await req.json();

    // Ensure the ID in the request body matches the company ID in the URL
    if (data.id && data.id.toString() !== companyId) {
      return NextResponse.json({ message: 'ID in the body does not match the company ID in the URL' }, { status: 400 });
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/company/${companyId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to update company' }, { status: response.status });
    }

    const responseData = await response.json();
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = req.cookies.get('token');

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(req.url);
    const companyId = url.searchParams.get('id');

    if (!companyId) {
      return NextResponse.json({ message: 'Company ID is required' }, { status: 400 });
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/company/${companyId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to delete company' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Company deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
