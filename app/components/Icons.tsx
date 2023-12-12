import { IconTrees } from '@tabler/icons-react'

const TypeIcons = ({
  type,
  className,
}: {
  type: string
  className?: string
}) => {
  switch (type) {
    case 'IconTrees':
      return <IconTrees className={className} />
    default:
      return <IconTrees className={className} />
  }
}

export const Icons = ({ type }: { type: string; className?: string }) => {
  return <TypeIcons type={type} className='w-full h-full' />
}
