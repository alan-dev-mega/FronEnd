import  { useWindowDimensions } from '../WindowDimensionsProvider';

const ResponsiveLayout = ({breakpoint = 600, renderMobile, renderDesktop}) => {
    const { width } = useWindowDimensions();
    return width > breakpoint ? renderDesktop(): renderMobile();
}

export default ResponsiveLayout;