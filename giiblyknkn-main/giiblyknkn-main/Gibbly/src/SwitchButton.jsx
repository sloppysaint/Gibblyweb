import { useRecoilState } from 'recoil';
import checked from './store/Checked';




const SwitchComponent = () => {
    const [checking, setChecked] = useRecoilState(checked);
  
  
    const switchStyles = {
      display: 'inline-block',
      position: "relative",
      bottom: "10px"
    };
  
    const switchLabelStyles = {
      display: 'block',
      width: '60px',
      height: '30px',
      padding: '3px',
      borderRadius: '15px',
      border: '2px solid black',
      cursor: 'pointer',
      transition: '1.3s',
      position: 'relative',
    };
  
    const switchLabelAfterStyles = {
      content: '""',
      display: 'block',
      width: '20px',
      height: '20px',
      borderRadius: '12px',
      background: 'black',
      transition: '0.3s',
      position: 'absolute',
      top: '3px',
      left: checking ? '35px' : '3px',
    };
  
    const handleSwitchChange = () => {
      setChecked((checked) => !checked);
    };
  
    return (
  
  
      <div style={{ display: "flex", columnGap: "8vw" }}>
        <span onClick={handleSwitchChange} style={switchStyles}>
          <input
            id="switch-rounded"
            type="checkbox"
            checked={checked}
            onChange={handleSwitchChange}
            style={{ display: 'none' }}
          />
          <label
            htmlFor="switch-rounded"
            style={switchLabelStyles}
  
          >
            <div style={switchLabelAfterStyles}></div>
          </label>
        </span>
        {checking ? <h4 style={{ color: "green" }} > "Saved" </h4> : <h4 style={{ color: "red" }}>"Unsaved" </h4>}
      </div>
  
  
    );
  };


  export {SwitchComponent}