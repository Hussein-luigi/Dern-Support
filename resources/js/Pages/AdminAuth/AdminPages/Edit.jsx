  import InputError from "@/Components/InputError";
  import InputLabel from "@/Components/InputLabel";
  import TextInput from "@/Components/TextInput";
  import TextAreaInput from "@/Components/TextAreaInput";
  import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
  import { Head, Link, useForm } from "@inertiajs/react";
  import SelectInput from "@/Components/SelectInput";
import AppLogo from "@/Components/AppLogo";
import AdminLayout from "@/Layouts/Parts/AdminLayout";
  export default function Edit({ auth ,repair}){
      const { data, setData, post, errors, reset } = useForm({
          name: repair.name ||"",
          status: repair.status ||"",
          description: repair.description ||"",
          tracker: repair.tracker ||"",
          due_date: repair.due_date ||"",
          _method:'PUT'
        });
      
        const onSubmit = (e) => {
          e.preventDefault();
      
          post(route("Repair.update",repair.id));
        };
      return(
          <>
              <AdminLayout
              user={auth.user}
              header={
              <div className="flex justify-between text-center">
                  <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                      Edit <strong className="text-green-600">"{repair.name}"</strong> Data Request
                  </h2>
              </div>
              }
              >
                  <Head title="Repair Request" />
                  <div className="py-12">
                  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                      <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                          <div className="p-6 text-gray-900 dark:text-gray-100">
                          <form
                onSubmit={onSubmit}
                className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
              >
                <div className="mt-4">
                  <InputLabel htmlFor="request_name" value="Device name" />
                  <h1 className=" ">{data.name}</h1>


                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel
                    htmlFor="request_description"
                    value="Request Description"
                  />

                  <h1>{data.description}</h1>

                  <InputError message={errors.description} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="request_status" value="Request Status" />

                  <SelectInput
                    name="status"
                    id="request_status"
                    value={data.status}  // Ensure correct status is selected
                    className="mt-1 block w-full"
                    onChange={(e) => setData("status", e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="complete">Completed</option>
                  </SelectInput>

                  <InputError message={errors.request_status} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="tracker" value="Request Tracker" />

                  <SelectInput
                    name="tracker"
                    id="request_tracker"
                    value={data.tracker}  // Ensure correct tracker percentage is selected
                    className="mt-1 block w-full"
                    onChange={(e) => setData("tracker", e.target.value)}
                  >
                    <option value="0%">0%</option>
                    <option value="10%">10%</option>
                    <option value="20%">20%</option>
                    <option value="30%">30%</option>
                    <option value="40%">40%</option>
                    <option value="50%">50%</option>
                    <option value="60%">60%</option>
                    <option value="70%">70%</option>
                    <option value="80%">80%</option>
                    <option value="90%">90%</option>
                    <option value="100%">100%</option>
                  </SelectInput>

                  <InputError message={errors.request_tracker} className="mt-2" />
                </div>
                <div className="mt-4 text-right">
                  <Link
                    href={route("RepairRequest.index")}
                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                  >
                    Cancel
                  </Link>
                  <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                    Submit
                  </button>
                </div>
              </form>
                          </div>
                      </div>
                  </div>
                  </div>
                             {/* Debugging - Only show in development */}
            {/* {process.env.NODE_ENV === "development" && (
                <pre className="mt-6 bg-gray-900 text-white p-4 rounded">
                    {JSON.stringify(repair, null, 2)}
                </pre>
            )}          */}
              </AdminLayout>
          </>
      )
  }