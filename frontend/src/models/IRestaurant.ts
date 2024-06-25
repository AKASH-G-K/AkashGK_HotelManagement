export default interface IRestaurant {
    id:number,
    name:String,
    description: string,
    cuisines: string[],
    opens: string,
    closes: string,
    rating: number,
    numRatings: number,
    costForTwo: number,
    imageUrl: string
}