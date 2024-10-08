import { apiSlice } from "../api/apiSlice";

export const vendorApi = apiSlice.injectEndpoints({
    tagTypes: ["vendor"],
    endpoints: (builder) => ({
        //get all  vendors
        getAllSeller: builder.query({
            query: () => ({
                url: `/auth/seller`,
                method: "POST",
            }),
            providesTags: ["vendor"],
        }),

        //get single vendor by id
        getSingleSeller: builder.query({
            query: (id) => ({
                url: `/auth/client-seller/${id}`,
                method: "POST",
            }),
            providesTags: ["vendor"],
        }),

        //update vendor
        updateVendorStatus: builder.mutation({
            query: ({ id, data }) => ({
                url: `/auth/seller/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["vendor"],
        }),
    }),
});


export const {
    useGetAllSellerQuery,
    useGetSingleSellerQuery,
    useUpdateVendorStatusMutation
} = vendorApi;