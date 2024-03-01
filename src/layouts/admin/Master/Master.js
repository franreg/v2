import React from "react";
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    return (
        <div>
            <div class="min-height-300 bg-primary position-absolute w-100"></div>
            <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4" id="sidenav-main">
            <div class="sidenav-header">
                <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a
                class="navbar-brand m-0"
                href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html "
                target="_blank"
                >
                <img
                    src="../assets/img/logo-ct-dark.png"
                    class="navbar-brand-img h-100"
                    alt="main_logo"
                />
                <span class="ms-1 font-weight-bold">Argon</span>
                </a>
            </div>
            <hr class="horizontal dark mt-0" />
            <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="../pages/dashboard.html">
                        <div
                            class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center"
                        >
                            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                        </div>
                        <span class="nav-link-text ms-1">Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
            </aside>
            <main class="main-content position-relative border-radius-lg">
                <nav
                    class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
                    id="navbarBlur"
                    data-scroll="false"
                >
                    <div class="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li class="breadcrumb-item text-sm">
                            <a class="opacity-5 text-white" href="javascript:;">Pages</a>
                        </li>
                        <li
                            class="breadcrumb-item text-sm text-white active"
                            aria-current="page"
                        >
                            Dashboard
                        </li>
                        </ol>
                        <h6 class="font-weight-bolder text-white mb-0">Dashboard</h6>
                    </nav>
                    <div
                        class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                        id="navbar"
                    >
                        <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div class="input-group">
                            <span class="input-group-text text-body"
                            ><i class="fas fa-search" aria-hidden="true"></i
                            ></span>
                            <input
                            type="text"
                            class="form-control"
                            placeholder="Type here..."
                            />
                        </div>
                        </div>
                        <ul class="navbar-nav justify-content-end">
                            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                                <a
                                href="javascript:;"
                                class="nav-link text-white p-0"
                                id="iconNavbarSidenav"
                                >
                                <div class="sidenav-toggler-inner">
                                    <i class="sidenav-toggler-line bg-white"></i>
                                    <i class="sidenav-toggler-line bg-white"></i>
                                    <i class="sidenav-toggler-line bg-white"></i>
                                </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <div class="container-fluid py-4">
                  <Outlet />
                </div>
            </main>
        </div>
    )
}