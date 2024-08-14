import { Sidebar } from "flowbite-react";
import { HiChartPie, HiTable, HiViewBoards } from "react-icons/hi";

import viteLogo from "/vite.svg";
import { DashboardMain } from "../components/DashboardMain";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Logout } from "../components/Logout";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({ tab: "data-viz" });
  const [openModal, setOpenModal] = useState(false);
  const tab = searchParams.get("tab");

  const isLoggedIn = localStorage.getItem("isLoggedIn") || "";
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);

  const checkAuth = (isLoggedIn) => {
    try {
      axios
          .post(BACKEND_URL + "/users/dashboard", { isLoggedIn: isLoggedIn })
          .then(() => {
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            setAccessDenied(true);
            new Promise((resolve) => {
              setTimeout(resolve, 3 * 1500);
            }).then(() => {
              navigate("/signin");
            })
            return;
          });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth(isLoggedIn);
  }, [isLoggedIn]);

  if (loading) {
    return (
        <div className="text-white flex justify-center place-items-center text-3xl mt-16">
          loading...
        </div>
    );
  } else if (accessDenied) {
    return (
        <div className="text-white flex justify-center place-items-center text-3xl mt-16">
          PLEASE LOG IN
        </div>
    );
  } else {
    return (
        <div className="flex h-screen w-full">
          <Sidebar aria-label="" className="min-w-64">
            <Sidebar.Logo img={viteLogo} imgAlt="Flowbite logo">
              SecureViz
            </Sidebar.Logo>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item
                    className="cursor-pointer"
                    icon={HiChartPie}
                    onClick={() => {
                      setSearchParams((prev) => {
                        prev.set("tab", "data-viz");
                        return prev;
                      });
                    }}
                >
                  Data Visualzation
                </Sidebar.Item>
                <Sidebar.Item
                    className="cursor-pointer"
                    icon={HiViewBoards}
                    onClick={() => {
                      setSearchParams((prev) => {
                        prev.set("tab", "about-us");
                        return prev;
                      });
                    }}
                >
                  About Us
                </Sidebar.Item>
                <Sidebar.Item
                    className="cursor-pointer"
                    icon={HiTable}
                    onClick={() => {
                      setOpenModal(true);
                    }}
                >
                  Logout
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
          <Logout openModal={openModal} setOpenModal={setOpenModal} />
          <DashboardMain searchParams={tab} />
        </div>
    );
  }
};