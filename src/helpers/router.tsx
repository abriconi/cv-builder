import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Routes } from "./routes";
import { Suspense, lazy } from "react";
import Loader from "../shared-components/Loader";
import { Zenith } from "../components/Preview/Templates/Zenith/Zenith";

const Lumina = lazy(() => import("./../components/Preview/Templates/Lumina/Lumina").then((module) => ({ default: module.Lumina })));
const Vertex = lazy(() => import("./../components/Preview/Templates/Vertex/Vertex").then((module) => ({ default: module.Vertex })));
const Aurora = lazy(() => import("./../components/Preview/Templates/Aurora/Aurora").then((module) => ({ default: module.Aurora })));
const Echo = lazy(() => import("./../components/Preview/Templates/Echo/Echo").then((module) => ({ default: module.Echo })));

export const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <App />,
  },
  {
    path: Routes.Vertex,
    element: (
      <Suspense fallback={<Loader />}>
        <Vertex />
      </Suspense>
    ),
  },
  {
    path: Routes.Lumina,
    element: (
      <Suspense fallback={<Loader />}>
        <Lumina />
      </Suspense>
    ),
  },
  {
    path: Routes.Aurora,
    element: (
      <Suspense fallback={<Loader />}>
        <Aurora />
      </Suspense>
    ),
  },
  {
    path: Routes.Echo,
    element: (
      <Suspense fallback={<Loader />}>
        <Echo />
      </Suspense>
    ),
  },
  {
    path: Routes.Zenith,
    element: (
      <Suspense fallback={<Loader />}>
        <Zenith />
      </Suspense>
    ),
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: Routes.Root,
//     element: <Layout />,
//     children: [
//       { index: true, element: <Navigate to={Routes.Announces} replace /> },
//       {
//         path: Routes.Torrents,
//         children: [
//           {
//             index: true,
//             element: (
//               <ProtectedRoute>
//                 <Torrents />
//               </ProtectedRoute>
//             ),
//           },
//           {
//             path: Routes.TorrentsAdd,
//             element: (
//               <ProtectedRoute>
//                 <TorrentAdd />
//               </ProtectedRoute>
//             ),
//           },
//           {
//             path: Routes.TorrentsSearch,
//             element: (
//               <ProtectedRoute>
//                 <TorrentsSearch />
//               </ProtectedRoute>
//             ),
//           },
//         ],
//       },
//       {
//         path: Routes.Announces,
//         element: (
//           <ProtectedRoute>
//             <Announces />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: Routes.Search,
//         element: (
//           <ProtectedRoute>
//             <TolokaSearch />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: Routes.AdvancedSearch,
//         element: (
//           <ProtectedRoute>
//             <Search />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: Routes.TolokaDetail,
//         element: (
//           <ProtectedRoute>
//             <TolokaDetail />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: Routes.PirateBayDetail,
//         element: (
//           <ProtectedRoute>
//             <PirateBayDetail />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: Routes.Wardrobe,
//         element: (
//           <ProtectedRoute>
//             <WardrobeDashboard />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: Routes.Budget,
//         element: (
//           <ProtectedRoute>
//             <LayoutBudget />
//           </ProtectedRoute>
//         ),
//         children: [
//           {
//             path: Routes.BudgetMain,
//             element: <BudgetMainPage />,
//           },
//           {
//             path: Routes.BudgetPlan,
//             element: <BudgetPlanPage />,
//           },
//           {
//             path: Routes.BudgetReport,
//             element: <BudgetReportPage />,
//           },
//         ],
//       },
//     ],
//   },
//   { path: Routes.Login, element: <Login /> },
//   { path: "*", element: <Navigate to={Routes.Announces} replace /> },
// ]);
