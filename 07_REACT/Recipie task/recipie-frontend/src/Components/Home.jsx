
import { Link } from 'react-router-dom'

import RestCard from './RestCard'

function Home() {

  return (
    <div>
        <div className="row">
            <div className="col p-3">
                <img src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=740&t=st=1715416564~exp=1715417164~hmac=dc2ac1db1b2cd88eee4a1156eb6e91d544edef097579dadeb9d2b5476588dfa3" alt="" width={'100%'} />
            </div>
            <div className="col p-5">
                <h2>Discover Culinary Delights: Explore Our Recipes</h2>
                <p>Welcome to our culinary haven! Embark on a gastronomic journey with our curated collection of recipes designed to tantalize your taste buds and ignite your passion for cooking. Whether you're a seasoned chef or a novice in the kitchen, our diverse range of recipes caters to every palate and skill level. From savory mains to decadent desserts, we have something for everyone. Join our community of food enthusiasts, and let's cook up something extraordinary together!</p>
            </div>
        </div>

        <div className='text-center'>
            <Link to={'/add'}>
            <button className='btn btn-primary'>Add</button>
            </Link>
          </div>

       <RestCard/>

      
    </div>
  )
}

export default Home