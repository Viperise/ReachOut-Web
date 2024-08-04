import { Establishment } from "@app/base/mock";
import {
    Button,
    Table, 
    TableHeader, 
    TableColumn, 
    TableBody, 
    TableRow, 
    TableCell,
    Pagination, 
} from "@nextui-org/react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useEstablishment from "@app/app/hook/establishments";

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
                aria-label="Example table with client async pagination"
                bottomContent={
                    pages > 0 ? (
                    <div className="flex w-full justify-center">
                        <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                        />
                    </div>
                    ) : null
                }
            >
                <TableHeader>
                    <TableColumn>{""}</TableColumn>
                    <TableColumn style={{color:'#8B83BA'}}>NOME</TableColumn>
                    <TableColumn style={{color:'#8B83BA'}}>ENDEREÇO</TableColumn>
                    <TableColumn style={{color:'#8B83BA'}}>PROPRIETÁRIO</TableColumn>
                    <TableColumn className="flex justify-center items-center">
                        <button>
                            <IoEllipsisVerticalSharp style={{fontSize: '24px', color: '#8B83BA'}}/>
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
                                <p style={{color: '#3366FF'}}>{item.lastName}</p>
                            </TableCell>
                            <TableCell>
                                <p>{item.firstAddress}</p>
                                <p style={{color: '#3366FF'}}>{item.lastAddress}</p>
                            </TableCell>
                            <TableCell>
                                <p>{item.owner}</p>
                                <div className="flex gap-1" style={{color: '#3366FF'}}>
                                    <p>{item.employee}</p>
                                    <p>Funcionários</p>
                                </div> 
                            </TableCell>
                            <TableCell>
                                <div className="flex justify-center">
                                    <Link href={`/establishments/${item.id}`}>
                                        <button className="py-2 px-4 border rounded-full" style={{color: '#3366FF'}}>
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