export const withSVG = (WrappedComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>) => {
  return function WithSVG({ height = 20, width = 20, ...props }) {
    return (
      <WrappedComponent
        xmlns='http://www.w3.org/2000/svg'
        height={height}
        width={width}
        {...props}
      />
    )
  }
}
