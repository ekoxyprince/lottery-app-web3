import PropTypes from 'prop-types'


const Marquee = ({ children }) => {
  return (
    <div className="marquee bg-heavyGreen py-2 font-bold text-sm w-[100%]">
      <div className="marquee-content">{children}</div>
    </div>
  );
};
Marquee.propTypes = {
  children:PropTypes.node
}


export default Marquee;
