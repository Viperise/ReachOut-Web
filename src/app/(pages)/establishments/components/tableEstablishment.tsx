import { Establishment } from "@app/base/mock";
import {
    Table, 
    TableHeader, 
    TableColumn, 
    TableBody, 
    TableRow, 
    TableCell,
    Pagination, 
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useEstablishment from "@app/app/hook/establishments";
import { ICONS } from "@app/utils/constants/icons";

const TableEstablishment = () => {
    const {
        Items,
        page,
        pages,
        setPage,
    } = useEstablishment();
    
    return (
        <div className="flex flex-col gap-1">
            <Table 
                radius="none"
                shadow="sm"
                aria-label="Example table with client async pagination"
                bottomContent={
                    pages > 0 ? (
                    <div className="flex w-full justify-center">
                        <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                        />
                    </div>
                    ) : null
                }
            >
                <TableHeader>
                    <TableColumn className="text-primary-700 bg-primary-200">{""}</TableColumn>
                    <TableColumn className="text-primary-700 bg-primary-200">NOME</TableColumn>
                    <TableColumn className="text-primary-700 bg-primary-200">ENDEREÇO</TableColumn>
                    <TableColumn className="text-primary-700 bg-primary-200">PROPRIETÁRIO</TableColumn>
                    <TableColumn className="flex justify-center items-center bg-primary-200">
                        <button>
                            <ICONS.threedot style={{fontSize: '24px', color: '#494285'}}/>
                        </button>
                    </TableColumn>
                </TableHeader>
                <TableBody items={Establishment}>
                    {Items.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell className="flex justify-center">
                                <Image src={item.img} alt={"imagem"} width={200} height={200}></Image>
                            </TableCell>
                            <TableCell>
                                <p>{item.firstName}</p>
                                <p className="text-info-500">{item.lastName}</p>
                            </TableCell>
                            <TableCell>
                                <p>{item.firstAddress}</p>
                                <p className="text-info-500">{item.lastAddress}</p>
                            </TableCell>
                            <TableCell>
                                <p>{item.owner}</p>
                                <div className="flex gap-1 text-info-500">
                                    <p>{item.employee}</p>
                                    <p>Funcionários</p>
                                </div> 
                            </TableCell>
                            <TableCell>
                                <div className="flex justify-center">
                                    <Link href={`/establishments/${item.id}`}>
                                        <button className="py-2 px-4 border rounded-full text-info-500">
                                            MAIS DETALHES
                                        </button> 
                                    </Link>
                                </div>
                            </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </div>
    )
}

export default TableEstablishment