import styled from 'styled-components';

export const Button = styled.button`
  font-size: 20px;
  letter-spacing: 0.2px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #484848;
  background: none;
  border: 1px solid #dce0e0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  text-align: center;
  text-decoration: none;
  width: auto;
`;

export const Input = styled.input`
  font-size: 15px;
  letter-spacing: 0.2px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: #484848;
  background: none;
  border: 1px solid #dce0e0;
  border-radius: 4px;
  display: inline-block;
  outline: none;
  margin-left: 10px;
  padding-left: 12px;
  padding-right: 12px;
  text-align: center;
  text-decoration: none;
  width: auto;
`;

export const Close = styled.a`
  float: left;
  color: #777;
  font: 14px/100% arial, sans-serif;
  position: absolute;
  right: 5px;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  top: 5px;
  :after {
    content: '✖';
    display: block;
    clear: both;
  }
`;

export const Label = styled.label`
  display: inline-block;
`;
