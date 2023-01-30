import React from 'react'
import Button from 'react-bootstrap/Button';

const Btn = (props) => {
    const { text } = props;
        return ( 
            <div class="btn d-md-flex justify-content-md-center">
                <Button variant="primary btn-lg col-6" type="submit" >
                    {text}
                </Button>
            </div>
        
    );
};

export default Btn;
