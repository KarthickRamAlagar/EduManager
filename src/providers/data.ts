// import { BACKEND_BASE_URL } from "@/constants";
// import { CreateResponse, ListResponse } from "@/types";
// import { HttpError } from "@refinedev/core";
// import { createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";
// import { Variable } from "lucide-react";

// if (!BACKEND_BASE_URL) {
//   throw new Error(
//     "BACKEND_BASE_URL is not configured.Please set VITE_BACKEND_URL in your .env file.",
//   );
// }

// const buildHttpError = async (response: Response): Promise<HttpError> => {
//   let message = "Request Failed";

//   try {
//     const payload = (await response.json()) as { message?: string };

//     if (payload?.message) {
//       message = payload.message;
//     }
//   } catch {
//     // ignore JSON parsing errors
//   }

//   return {
//     message,
//     statusCode: response.status,
//   };
// };

// const options: CreateDataProviderOptions = {
//   getList: {
//     getEndpoint: ({ resource }) => resource,

//     buildQueryParams: async ({ resource, pagination, filters }) => {
//       const page = pagination?.currentPage ?? 1;
//       const pageSize = pagination?.pageSize ?? 10;
//       const params: Record<string, string | number> = { page, limit: pageSize };

//       filters?.forEach((filter) => {
//         const field = "field" in filter ? filter.field : "";
//         const value = String(filter.value);
//         if (resource === "subjects") {
//           if (field === "department") params.department = value;
//           if (field === "name" || field === "code") params.search = value;
//         }
//       });
//       return params;
//     },
//     mapResponse: async (response) => {
//       if (!response.ok) throw await buildHttpError(response);
//       const payload: ListResponse = await response.clone().json();
//       return payload.data ?? [];
//     },

//     getTotalCount: async (response) => {
//       if (!response.ok) throw await buildHttpError(response);
//       const payload: ListResponse = await response.clone().json();
//       return payload.pagination?.total ?? payload.data?.length ?? 0;
//     },
//   },
//   create: {
//     getEndpoint: ({ resource }) => resource,
//     buildBodyParams: async ({ variables }) => variables,
//     mapResponse: async (response) => {
//       const json: CreateResponse = await response.json();
//       return json.data ?? [];
//     },
//   },
// };

// const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);
// export { dataProvider };

import { BACKEND_BASE_URL } from "@/constants/index";
import { CreateResponse, ListResponse } from "@/types";
import { HttpError } from "@refinedev/core";
import { createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";

// 🚨 Ensure ENV is present
if (!BACKEND_BASE_URL) {
  throw new Error(
    "BACKEND_BASE_URL is not configured. Please set VITE_BACKEND_BASE_URL in your .env file.",
  );
}

// 🔥 Standard error handler
const buildHttpError = async (response: Response): Promise<HttpError> => {
  let message = "Request Failed";

  try {
    const payload = (await response.json()) as { message?: string };
    if (payload?.message) message = payload.message;
  } catch {
    // ignore JSON parsing errors
  }

  return {
    message,
    statusCode: response.status,
  };
};

// ⚙️ Refine Data Provider Options
const options: CreateDataProviderOptions = {
  // ================= GET LIST =================
  getList: {
    // endpoint = /subjects OR /users
    getEndpoint: ({ resource }) => resource,

    // build query params
    buildQueryParams: async ({ resource, pagination, filters }) => {
      const page = pagination?.currentPage ?? 1;
      const pageSize = pagination?.pageSize ?? 10;

      const params: Record<string, string | number> = {
        page,
        limit: pageSize,
      };

      filters?.forEach((filter) => {
        const field = "field" in filter ? filter.field : "";
        const value = String(filter.value);

        // 🔹 SUBJECTS FILTERS
        if (resource === "subjects") {
          if (field === "department") params.department = value;
          if (field === "name" || field === "code") {
            params.search = value;
          }
        }

        // 🔹 USERS FILTERS
        if (resource === "users") {
          if (field === "role") params.role = value;
          if (field === "name" || field === "email") {
            params.search = value;
          }
        }
      });

      return params;
    },

    // map API response → refine format
    mapResponse: async (response) => {
      if (!response.ok) throw await buildHttpError(response);

      const payload: ListResponse = await response.clone().json();
      return payload.data ?? [];
    },

    // total count for pagination
    getTotalCount: async (response) => {
      if (!response.ok) throw await buildHttpError(response);

      const payload: ListResponse = await response.clone().json();
      return payload.pagination?.total ?? payload.data?.length ?? 0;
    },
  },

  // ================= CREATE =================
  create: {
    getEndpoint: ({ resource }) => resource,

    buildBodyParams: async ({ variables }) => variables,

    mapResponse: async (response) => {
      if (!response.ok) throw await buildHttpError(response);

      const json: CreateResponse = await response.json();
      return json.data ?? {};
    },
  },
};

// 🚀 Create Data Provider
const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);

export { dataProvider };
