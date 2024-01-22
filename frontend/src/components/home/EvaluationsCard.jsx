import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import EvaluationSingleCard from './EvaluationSingleCard';

const EvaluationsCard = ({ evaluations }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {evaluations.map((item) => (
        <EvaluationSingleCard key={item._id} evaluations={item} />
      ))}
    </div>
  );
};

export default EvaluationsCard;