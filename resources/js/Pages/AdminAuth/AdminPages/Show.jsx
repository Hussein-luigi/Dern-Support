import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/Parts/AdminLayout";
import {
    PROJECT_STATUS_CLASS_MAP,
    PROJECT_STATUS_TEXT_MAP
} from "@/constants";

export default function Show({ admin }) {
    if (!admin) {
        return (
            <AdminLayout>
                <p className="text-center text-red-500">Admin request not found.</p>
            </AdminLayout>
        );
    }

    const statusText = PROJECT_STATUS_TEXT_MAP[admin.status] || "Unknown";
    const statusClass = PROJECT_STATUS_CLASS_MAP[admin.status] || "bg-gray-500";

    return (
        <AdminLayout
            header={
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    {`Device "${admin.name}"`}
                </h2>
            }
        >
            <Head title={`Device "${admin.name}"`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Device Name */}
                        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Device Name
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{admin.name}</p>
                        </div>

                        {/* Description */}
                        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Description
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 break-words whitespace-pre-line">
                                {admin.description}
                            </p>
                        </div>


                        {/* Status */}
                        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Status
                            </h3>
                            <span className={`inline-block text-lg text-white px-3 py-1 rounded ${statusClass}`}>
                                {statusText}
                            </span>
                        </div>

                        {/* Tracker */}
                        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Tracker
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{admin.tracker}</p>
                        </div>

                        {/* Due Date */}
                        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Due Date
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{admin.due_date}</p>
                        </div>

                        {/* Created By */}
                        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Created By
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{admin.created_by?.name ?? "Unknown"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
