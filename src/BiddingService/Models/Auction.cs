using System;
using MongoDB.Entities;

namespace BiddingService.Models;

public class Auction : Entity
{
    public DateTime AuctionEnd { get; set; }
    public required string Seller { get; set; }
    public int ReservedPrice { get; set; }
    public bool Finished { get; set; }
}
