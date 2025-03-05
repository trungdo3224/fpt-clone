import { Dropdown } from 'rsuite';

const CustomDropDown = ({ ...props }) => {
  const customStyle = {
    display: 'flex',
    columnGap: '24px',
    flexDirection: props.flexDirection,
    background: 'white',
    padding: '32px 24px 16px 24px',
    borderRadius: '8px',
    position: 'absolute',
    color: 'red',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };
  return (
    <Dropdown {...props}>
      <div style={customStyle}>
        {props.items &&
          props.items.map((item, idx) => {
            // Added parentheses around (item, idx)
            return (
              <Dropdown.Item key={idx}>
                <div>
                  <div className='flex items-center mb-4'>
                    {item.icon && <div className='mr-2'>{item.icon}</div>}
                    {props.isTitleLink ? (
                      <a
                        href={item.href}
                        className='font-medium text-gray-800 cursor-pointer'
                      >
                        {item.title}
                      </a>
                    ) : (
                      <h3 className='font-medium text-gray-800'>
                        {item.title}
                      </h3>
                    )}
                  </div>
                  <div className='flex flex-col gap-y-4'>
                    {item.children &&
                      item.children.map((child, indx) => (
                        <ul className='space-y-2 pl-8' key={indx}>
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
