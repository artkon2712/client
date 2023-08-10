import DomainCard from 'components/DomainCard';

const DomainList: React.FC<{ domains: string[] }> = ({ domains }) => {
  return (
    <ul className="px-[40px] space-y-[25px]">
      {domains.map(title => {
        return (
          <li key={title}>
            <DomainCard title={title} />
          </li>
        );
      })}
    </ul>
  );
};

export default DomainList;
