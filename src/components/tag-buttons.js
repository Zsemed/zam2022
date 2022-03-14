import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"

const Button = styled.button`
    background: transparent;
    float: right;
    border-radius: 2px;
    border: 2px solid steelblue;
    color: steelblue;
    margin: 15px 15px 15px 0px;
    padding: 0,4em;
    font-family: Arial, Helvetica, sans-serif; 
`

const TagButtons = ({ tagek }) => (
  <div>
          {tagek.map(element => {
            let loc = "/tags/"+element.toString()
            return <Button key={element.toString()} as="a" href={loc}> {element.toString()} </Button> })
          }
        </div>
);

TagButtons.defaultProps = {
  tagek: [],
}

TagButtons.propTypes = {
  tagek: PropTypes.arrayOf(PropTypes.string),
}

export default TagButtons
