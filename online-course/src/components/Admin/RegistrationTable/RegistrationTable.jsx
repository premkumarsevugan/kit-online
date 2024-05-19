import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';

const RegistrationsTable = () => {
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/registrations')
            .then(response => {
                setRegistrations(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the registrations!', error);
            });
    }, []);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Course',
            selector: row => row.course,
            sortable: true,
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true,
        },
        {
            name: 'Date of Birth',
            selector: row => new Date(row.dob).toLocaleDateString(),
            sortable: true,
        },
        {
            name: 'Cut Off',
            selector: row => row.cutoff,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
        },
    ];

    const csvData = registrations.map(({ _id, ...rest }) => rest);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Course Registrations</h1>
                <CSVLink
                    data={csvData}
                    filename="registrations.csv"
                    className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-900"
                >
                    Export CSV
                </CSVLink>
            </div>
            <DataTable
                title="Registrations"
                columns={columns}
                data={registrations}
                pagination
                className="shadow rounded-lg"
                customStyles={{
                    header: {
                        style: {
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#4A5568',
                        },
                    },
                    headCells: {
                        style: {
                            backgroundColor: '#F7FAFC',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#2D3748',
                        },
                    },
                    cells: {
                        style: {
                            fontSize: '14px',
                            color: '#2D3748',
                        },
                    },
                }}
            />
        </div>
    );
};

export default RegistrationsTable;
