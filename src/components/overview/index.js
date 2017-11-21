import React, { Component } from 'react';
import './overview.css';
import NavBar from '../nav-bar';

export default class Overview extends Component {

    render() {
        return (
            <div className="container">
                <NavBar />
                <div className="columns content">
                    <div className="column is-two-thirds">
                        <h1 className="title">Changes to your payments</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam elementum imperdiet. Mauris vitae ornare mi. Donec placerat, sem in malesuada facilisis, odio massa hendrerit lacus, eu convallis ante nisl nec nulla. Nunc ac feugiat nibh. Donec in mollis justo. Nullam tristique metus id ipsum bibendum, a elementum ante scelerisque. Proin vitae vehicula nunc. Suspendisse vitae velit sit amet est suscipit fringilla porta vel augue. Cras consectetur finibus rutrum. Fusce mollis vitae ipsum nec mollis. Curabitur commodo diam augue, convallis sollicitudin metus venenatis in. Pellentesque sapien mi, semper nec placerat varius, auctor et nibh. Cras magna odio, hendrerit quis rhoncus et, ornare maximus elit. Sed mollis placerat est et dapibus. Sed rutrum ultricies pharetra. Morbi a pellentesque nulla.</p>
                        <p>Sed rhoncus, lacus id posuere posuere, mi neque ultrices ex, eget maximus nulla justo mattis ligula. Praesent vitae tortor convallis, semper diam ut, maximus sapien. Donec libero nunc, congue et feugiat et, vestibulum nec nisl. Fusce scelerisque posuere risus. Duis purus ligula, fermentum vitae tristique et, suscipit nec neque. Nam in scelerisque orci. Vestibulum pharetra, velit vitae posuere consectetur, mauris magna molestie odio, nec feugiat sapien libero sed purus. Aenean sit amet nisl at mauris pharetra faucibus in eget ipsum. Nulla id tortor dui. Curabitur euismod efficitur odio, a finibus libero vestibulum nec. Duis mattis nec ante id feugiat.</p>
                        <p>Praesent nunc turpis, dapibus et tortor et, finibus viverra tellus. Sed ultricies eget felis vitae lobortis. Mauris pretium vulputate convallis. Proin blandit at odio vitae fringilla. Integer egestas euismod imperdiet. Donec eleifend magna leo, in accumsan justo dictum sed. Integer consequat, velit blandit iaculis pharetra, dolor neque auctor est, at tristique nunc nisl ut elit. Nulla in mauris sed neque interdum consectetur.</p>
                    </div>
                    <div className="column">

                    </div>
                </div>
            </div>
        );
    }
}


