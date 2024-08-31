import deleticon  from '../assets/delete.png'
import tickicon  from '../assets/tick.png'
 import nottickicon  from '../assets//not_tick.png'
 import PropTypes from 'prop-types';

function Todoitems ( {text ,id ,iscomplete ,delettodo ,toggle} ) {
  return (
    <div className="flex items-center my-3 gap-2">

      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
<img  className='w-7' src={iscomplete ? tickicon : nottickicon } alt="" />
<p className={`pl-2 text-[17px] text-red-400 ${iscomplete ?"line-through" : '' }`}> {text}</p>
    </div>

    <img onClick={()=>{delettodo(id)}} className='w-6 cursor-pointer' src={deleticon} alt="" />
    </div>
  )
}
Todoitems.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  iscomplete: PropTypes.bool.isRequired,
  delettodo: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};


export default Todoitems
