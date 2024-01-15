import { FaSuitcaseRolling, FaBug, FaCalendarCheck } from 'react-icons/fa';
import StatItem from '../components/StatItem';
import Wrapper from '../assets/wrappers/StatsContainer';

const StatsContainer = ({ defaultStats}) => {
  const stats = [
    {
      title: 'pending applications',
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#f59e0b',
      bcg: '#fef3c7',
    },
    {
      title: 'interview scheduled',
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];
  return (
    <Wrapper>
      {stats.map((items) => {
        return <StatItem key={items.title} {...items} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
