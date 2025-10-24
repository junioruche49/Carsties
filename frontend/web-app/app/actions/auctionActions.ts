"use server"
import { fetchWrapper } from "@/lib/fetchWrapper";
import { Auction, PagedResult } from "@/types";

export async function getData(url: string): Promise<PagedResult<Auction>> {
  const result = await fetch(`http://localhost:6001/search${url}`);
  if (!result.ok) throw new Error("Failed to fetch data");
  return result.json();
}

export async function updateAuctionTest(): Promise<{status: number, message: string}> {
    const data = {
        "make": "Ford Updated",
    "mileage": 20022,
    } 

    return fetchWrapper.put('auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c', data);
}

// export async function createAuction(data: FieldValues) {
//     return fetchWrapper.post('auctions', data);
// }

// export async function getDetailedViewData(id: string): Promise<Auction> {
//     return fetchWrapper.get(`auctions/${id}`);
// }

// export async function updateAuction(data: FieldValues, id: string) {
//     return fetchWrapper.put(`auctions/${id}`, data);
// }

// export async function deleteAuction(id: string) {
//     return fetchWrapper.del(`auctions/${id}`);
// }

// export async function getBidsForAuction(id: string): Promise<Bid[]> {
//     return fetchWrapper.get(`bids/${id}`);
// }

// export async function placeBidForAuction(auctionId: string, amount: number) {
//     return fetchWrapper.post(`bids?auctionId=${auctionId}&amount=${amount}`, {});
// }