import React,{Component} from "react";
import IRestaurant from "../../models/IRestaurant";
import { LoadingStatus } from "../../models/types";
import { Alert, Row, Col } from "react-bootstrap";
import LoadingIndicator from "../common/LoadingIndicator";
import RestaurantListItem from "./RestaurantListItem";
import { getRestaurants } from "../../services/restaurants";
type Props = {

};

type State  = {
    status:LoadingStatus,
    restaurants?:IRestaurant[],
    error?:Error 
};


class RestaurantsList extends Component<Props,State> {
state:State = {
    status:'LOADING'
};
render(){
    let el;
    const { status, restaurants, error } = this.state;
    switch ( status ) {
        case 'LOADING':
            el=(
                <LoadingIndicator size="large"
                message="we are fetching the list of restaurants. Please wait..."
                />
            );
            break;
        case 'LOADED':
            el=(
               <Row xs={1} md={2} lg={3}>
                {
                    restaurants?.map(
                        restaurant => (
                            <Col key={restaurant.id} className="d-flex align-items-stretch my-3">{/*used to align all the cards at same hieght */}
                                <RestaurantListItem restaurant={restaurant}/>
                            </Col>
                        )
                    )
                }
               </Row>

            );
            break;
        case 'ERROR_LOADING':
            el=(
                <Alert variant="danger my-3">{error?.message}</Alert>
            );
            break;
    }
    return el;
}
async componentDidMount() {
    this.setState({
        status: 'LOADING'
    });
    try{
        const data = await getRestaurants();
        this.setState({
            status:'LOADED',
            restaurants:data
        });
    } catch( error ){
        this.setState({
            status:'ERROR_LOADING',
            error:new Error('some error ocuured')
        })
    }
}
}
export default RestaurantsList;