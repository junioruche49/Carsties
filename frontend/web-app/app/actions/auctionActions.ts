"use server"
import { Auction, PagedResult } from "@/types";

export async function getData(url: string): Promise<PagedResult<Auction>> {
  const result = await fetch(`http://localhost:6001/search${url}`);
  if (!result.ok) throw new Error("Failed to fetch data");
  return result.json();
}