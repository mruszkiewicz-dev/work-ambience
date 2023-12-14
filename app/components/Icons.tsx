import {
  IconBackground,
  IconSnowflake,
  IconTrees,
  IconCampfire,
  IconCoffee,
  IconTree,
  IconLeaf,
  IconMoon,
  IconRipple,
  IconDroplet,
  IconCloudStorm,
  IconUmbrella,
} from '@tabler/icons-react'

const TypeIcons = ({
  type,
  className,
}: {
  type: string
  className?: string
}) => {
  switch (type) {
    case 'IconBackground':
      return <IconBackground className={className} />
    case 'IconSnowflake':
      return <IconSnowflake className={className} />
    case 'IconTrees':
      return <IconTrees className={className} />
    case 'IconCampfire':
      return <IconCampfire className={className} />
    case 'IconCoffee':
      return <IconCoffee className={className} />
    case 'IconTree':
      return <IconTree className={className} />
    case 'IconLeaf':
      return <IconLeaf className={className} />
    case 'IconMoon':
      return <IconMoon className={className} />
    case 'IconRipple':
      return <IconRipple className={className} />
    case 'IconDroplet':
      return <IconDroplet className={className} />
    case 'IconCloudStorm':
      return <IconCloudStorm className={className} />
    case 'IconUmbrella':
      return <IconUmbrella className={className} />
    default:
      return <IconBackground className={className} />
  }
}

export const Icons = ({ type }: { type: string; className?: string }) => {
  return <TypeIcons type={type} className='w-full h-full' />
}
