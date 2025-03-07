import { Dropdown } from 'rsuite';

const CustomDropDown = ({ ...props }) => {
  const customStyle = {
    columnGap: '24px',
    justifyContent: 'space-between',
    background: 'white',
    padding: '32px 24px 16px 24px',
    borderRadius: '8px',
    position: 'fixed',
    width: `${props.isFull ? '70%' : '250px'}`,
    transform: `${props.isFull ? 'translateX(-50%)' : 'none'}`,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };
  return (
    <Dropdown {...props}>
      <div className={`${props.isFull && 'left-[50%]'} ${props.useGrid ? 'grid grid-cols-3 gap-y-4 ': 'flex flex-col gap-y-2'}`} style={customStyle}>
        {props.items &&
          props.items.map((item, idx) => {
            // Added parentheses around (item, idx)
            return (
              <Dropdown.Item key={idx}>
                <div className={`flex flex-col justify-start items-start ${props.useGrid ? 'mb-6': 'mb-2'}`}>
                  <div className='flex items-center mb-4'>
                    {item.icon && <div className='mr-4 text-xl text-fpt-blue'>{item.icon}</div>}
                    {props.isTitleLink ? (
                      <a
                        href={item.href}
                        className='font-bold text-gray-800 cursor-pointer'
                      >
                        {item.title}
                      </a>
                    ) : (
                      <h3 className='font-medium text-gray-800'>
                        {item.title}
                      </h3>
                    )}
                  </div>
                  <div className='flex flex-col gap-y-1'>
                    {item.children &&
                      item.children.map((child, indx) => (
                        <ul className='space-y-2 pl-10' key={indx}>
                          <li>
                            <a
                              href={child.href}
                              className='text-gray-600 font-medium hover:text-fpt-red text-sm cursor-pointer'
                            >
                              {child.title}
                            </a>
                          </li>
                        </ul>
                      ))}
                  </div>
                </div>
              </Dropdown.Item> // Added key prop and content
            );
          })}
      </div>
    </Dropdown>
  );
};

export default CustomDropDown;
