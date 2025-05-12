import Pagination from "@/Components/Pagination";
import { PROJECT_STATUS_TEXT_MAP,PROJECT_STATUS_CLASS_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";

function Index({success}){
    const {repairs} = usePage().props;
    const deleteRequest = (repair)=>{
        if(!window.confirm("Are you sure you want to delete")){
            return;
        }
        router.delete(route('RepairRequest.destroy' , repair.id))
    }
    return(
        <>
            <AuthenticatedLayout 
            header={
            <div className="flex justify-between text-center">
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Repair Request
                </h2>
                <Link href={route('RepairRequest.create')} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">new request</Link>
            </div>

            }
            >
                <Head title="Repair Request" />
                <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {success && (
            <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
              {success}
            </div>
          )}    
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-left rtl:right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-grey-400 border-b-2 border-gray-500" >
                                    <tr className="text-nowrap" >
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Status</th>
                                        <th className="px-3 py-2">Complete Rate</th>
                                        <th className="px-3 py-2">create Date </th>
                                        <th className="px-3 py-2">Due Date</th>
                                        <th className="px-3 py-2">Created by</th>
                                        <th className="px-3 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {repairs.data.map((repair) =>{
                                        return(
                                            <tr key={repair.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                                                <td className="px-3 py-2">{repair.id}</td>
                                        
                                                <td className="px-3 py-2 hover:underline"><Link href={route('RepairRequest.show',repair.id)} >{repair.name}</Link></td>
                                                <td className="px-3 py-2"><span className={"px-3 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[repair.status]}>{PROJECT_STATUS_TEXT_MAP[repair.status]}</span></td>
                                                <td className="px-3 py-2">{repair.tracker}</td>
                                                <td className="px-3 py-2">{repair.created_at}</td>
                                                <td className="px-3 py-2">{repair.due_date}</td>
                                                <td className="px-3 py-2">{repair.created_by.name}</td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    <Link href={route('RepairRequest.edit' , repair.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                                        Edit
                                                    </Link>
                                                    {/* href={route('RepairRequest.destroy' , repair.id)} */}
                                                    <button onClick={(e) => deleteRequest(repair)}  className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    } )}
                                    
                                </tbody>
                            </table>
                            <Pagination  links={repairs.meta.links} />
                        {/* <pre>{JSON.stringify(repairs,undefined,2)}</pre> */}
                        </div>
                    </div>
                </div>
            </div>
            </AuthenticatedLayout>
        </>
    );
}
export default Index;