export interface IVakiProps {
  style?: React.CSSProperties
}

export default function Vaki({
  style
}: IVakiProps) {
  return (
    <iframe id="vakiIframe"
      title="Kribi"
      width="350"
      height="470"
      src="https://vaki.co/iframe/pwojqWyemFLV6IhQ1x4H"
      style={style}
    >
    </iframe>
  )
}