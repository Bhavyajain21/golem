import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Button from './Button';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-200'>
        <div>Bhavya x Mehul - Golem UI</div>
        <div className='cursor-pointer'>
        <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <Button variant="soft">
                Options
            </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
        <DropdownMenu.Item className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
              <span>Component</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
              <span>Worker</span>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="my-1 border-t" />
            <DropdownMenu.Item className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
              <span>API</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
              <span>Plugin</span>
            </DropdownMenu.Item>
        </DropdownMenu.Content>
</DropdownMenu.Root>

        </div>
    </div>
  )
}

export default Navbar
