import React from 'react'
import { FaDollarSign,FaPeopleCarry,FaUserFriends } from 'react-icons/fa';

const Alerts = () => {
  return (
    <div>
      <div className='bg-card mb-2 p-3'>
        <h4>Alerts <span className="badge text-bg-warning">4</span>         <span className='view-all'>ViewAll</span></h4>

        <ul className='list-display'>
  <li className='mb-2'>Your wire couldn't be completed<br></br>
    <span>08/09/23 05:23PM EDT</span>
  </li>
  <li className='mb-2'>Your wire couldn't be completed<br></br>
    <span>08/09/23 05:23PM EDT</span>
  </li>
  <li className='mb-2'>Volume Alert COMP,IDX<br></br>
    <span>08/09/23 05:23PM EDT</span>
  </li>
  <li className='mb-2'>Price Alert Meta<br></br>
    <span>08/09/23 05:23PM EDT</span>
  </li>
</ul>
</div>
<div className='bg-card p-3'>
<h4>Pay + Transfer </h4>

<ul className='list-unstyled p-2'>
<li>
  <div className='badge text-bg-primary p-3 br-5 mb-2'><FaDollarSign/></div> Pay Bill
</li>
<li><div className='badge text-bg-primary p-3 br-5 mb-2'><FaPeopleCarry/></div> Transfer
</li>
<li><div className='badge text-bg-primary p-3 br-5 mb-2'><FaUserFriends/></div> Send Money with Zelle
</li>
</ul>
</div>
        </div>
  )
}

export default Alerts