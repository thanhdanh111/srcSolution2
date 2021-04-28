import React,{useEffect} from 'react'
import './Navbar.css'
import $ from 'jquery'
import { Link } from 'react-router-dom';

export default function Navbar() {
    useEffect(() =>{
        $(document).ready(function() {
            var active1 = false;
            var active2 = false;
            var active3 = false;
            var active4 = false;
          
              $('.parent2').on('mousedown touchstart', function() {
              
              if (!active1) $(this).find('.test1').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
              else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
               if (!active2) $(this).find('.test2').css({'background-color': 'gray', 'transform': 'translate(60px,105px)'});
              else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
                if (!active3) $(this).find('.test3').css({'background-color': 'gray', 'transform': 'translate(105px,60px)'});
              else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
                if (!active4) $(this).find('.test4').css({'background-color': 'gray', 'transform': 'translate(125px,0px)'});
              else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
              active1 = !active1;
              active2 = !active2;
              active3 = !active3;
              active4 = !active4;
                
              });
          });
    },[])
    return (
        <div class="parent2">
        <div class="test1"><Link to="/"><i class="fa fa-home fa-2x"></i></Link></div>
        <div class="test2"><Link to="/product"><i class="fa fa-home fa-2x" ></i></Link></div>
        <div class="test3"><Link to="/productdisplay"><i class="fa fa-bell fa-2x" ></i></Link></div>
        <div class="test4"><Link to="/"><i class="fa fa-home fa-2x"></i></Link></div>
        <div class="mask2"><i class="fa fa-sun-o fa-3x"></i></div>
        </div>
        
    )
}
