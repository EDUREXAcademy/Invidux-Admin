import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { privateApi } from "@/api/adminAxios";
import { toast } from "react-toastify";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";

const UserModal = ({ isUserModal, setIsUserModal, user }: any) => {
  const queryClient = useQueryClient();
  const [action, setAction] = useState(false);
  const [isActivate, setIsActivate] = useState(false);
  const [isDeactivate, setIsDeactivate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const activateUser = async (userId: any) => {
    try {
      setIsLoading(true);
      const response = await privateApi.patch(
        `/api/v1/admin/reactivate-user/${userId}`
      );
      setIsActivate(false);
      setIsUserModal(false);
      setAction(false);
      toast.success(response.data.message, { toastId: "success1" });
      queryClient.invalidateQueries(["AppUsers"] as InvalidateQueryFilters);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  const deactivateUser = async (userId: any) => {
    try {
      setIsLoading(true);
      const response = await privateApi.patch(
        `/api/v1/admin/deactivate-user/${userId}`
      );
      setIsDeactivate(false);
      setIsUserModal(false);
      setAction(false);
      toast.success(response.data.message, { toastId: "success1" });
      queryClient.invalidateQueries(["AppUsers"] as InvalidateQueryFilters);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  const deleteUser = async (userId: any) => {
    try {
      setIsLoading(true);
      const response = await privateApi.delete(
        `/api/v1/admin/delete-user/${userId}`
      );
      setIsDelete(false);
      setIsUserModal(false);
      setAction(false);
      toast.success(response.data.message, { toastId: "success1" });
      queryClient.invalidateQueries(["AppUsers"] as InvalidateQueryFilters);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      let resMessage;
      error?.response?.status === 400
        ? (resMessage = error.response.data.errorMessages)
        : error?.response?.status === 500
        ? (resMessage = error.response.data)
        : (resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString());
      toast.error(resMessage, { toastId: "error1" });
    }
  };

  return (
    <Dialog open={isUserModal}>
      <DialogContent className="w-[300px] h-fit absolute right-0">
        <DialogHeader>
          <DialogTitle className="max-w-[614px] mb-2 ">
            <div className="flex justify-between items-center">
              <h3 className="text-neutral-950 text-2xl">{user?.name}</h3>
              <div
                onClick={() => {
                  setIsUserModal(false);
                }}
              >
                <X />
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-y-4">
            {/* Activate, Deactivate or Delete user */}
            {!action ? (
              <div className="">
                {user?.registrationStatus !== "Verified" ? (
                  <p
                    className="cursor-pointer mb-3 text-green-600 text-base"
                    onClick={() => {
                      setAction(true);
                      setIsActivate(true);
                    }}
                  >
                    Activate User
                  </p>
                ) : (
                  <p
                    className="cursor-pointer mb-3 text-neutral-950 text-base"
                    onClick={() => {
                      setAction(true);
                      setIsDeactivate(true);
                    }}
                  >
                    Deactivate User
                  </p>
                )}
                <p
                  className="cursor-pointer text-red-600 text-base"
                  onClick={() => {
                    setAction(true);
                    setIsDelete(true);
                  }}
                >
                  Delete User
                </p>
              </div>
            ) : isActivate ? (
              // Activate User
              <div>
                <p className="mb-4">
                  Are you sure you want to{" "}
                  <span className="text-green-600 font-bold">Activate</span>{" "}
                  this user?
                </p>
                <div className="flex gap-x-6">
                  <button
                    className="bg-zinc-300 text-neutral-500 hover:bg-zinc-600 hover:text-white px-10 py-3 rounded-[8px] capitalize cursor-pointer transition-all"
                    onClick={() => {
                      setAction(false);
                      setIsActivate(false);
                    }}
                  >
                    No
                  </button>
                  <button
                    className="bg-[#090909] text-white hover:bg-[#3e3e3e] hover:text-white px-10 py-3 rounded-[8px] capitalize cursor-pointer transition-all"
                    onClick={() => activateUser(user?.id)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            ) : isDeactivate ? (
              // Deactivate User
              <div>
                <p className="mb-4">
                  Are you sure you want to{" "}
                  <span className="font-bold">deactivate</span> this user?
                </p>
                <div className="flex gap-x-6">
                  <button
                    className="bg-zinc-300 text-neutral-500 hover:bg-zinc-600 hover:text-white px-10 py-3 rounded-[8px] capitalize cursor-pointer transition-all"
                    onClick={() => {
                      setAction(false);
                      setIsDeactivate(false);
                    }}
                  >
                    No
                  </button>
                  <button
                    className="bg-[#090909] text-white hover:bg-[#3e3e3e] hover:text-white px-10 py-3 rounded-[8px] capitalize cursor-pointer transition-all"
                    onClick={() => deactivateUser(user?.id)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            ) : (
              // Delete User
              <div>
                <p className="mb-4">
                  Are you sure you want to{" "}
                  <span className="text-red-600 font-bold">delete</span> this
                  user?
                </p>
                <div className="flex gap-x-6">
                  <button
                    className="bg-zinc-300 text-neutral-500 hover:bg-zinc-600 hover:text-white px-10 py-3 rounded-[8px] capitalize cursor-pointer transition-all"
                    onClick={() => {
                      setAction(false);
                      setIsDelete(false);
                    }}
                  >
                    No
                  </button>
                  <button
                    className="bg-[#090909] text-white hover:bg-[#3e3e3e] hover:text-white px-10 py-3 rounded-[8px] capitalize cursor-pointer transition-all"
                    onClick={() => deleteUser(user?.id)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
