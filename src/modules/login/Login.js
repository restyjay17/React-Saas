import React from 'react';
import { Link } from 'react-router-dom';
import { utils, writeFileXLSX } from 'xlsx';

import './login.css';
import logo from '../../assets/logo192.png';

const downloadExcel = () => {
	const data = [
		{ Name: 'Jane', Age: 21},
		{ Name: 'John', Age: 23}
	];

	const ws = utils.json_to_sheet(data, { origin: 7 });
    const wb = utils.book_new();
	utils.sheet_add_aoa(ws, [
		["PayPeriod", , , 1],
		[],
		[],
		["second row before data", , , 2]
	  ], { origin: 0 });
    utils.book_append_sheet(wb, ws, "Data");


	// merge cells
	// s = start, r = row, c=col, e= end
	const merge = [
		{ s: { r: 0, c: 0 }, e: { r: 1, c: 2 } },
		{ s: { r: 0, c: 3 }, e: { r: 1, c: 3 } },
		{ s: { r: 3, c: 0 }, e: { r: 3, c: 2 } },
	  ];
	  ws["!merges"] = merge;


	// cells width in pixels
	var wscols = [
		{wpx: 100},
		{wpx: 50},
		{wpx: 50},
		{wpx: 100}
	];
	ws['!cols'] = wscols;


	// cells height
	var wsrows = [
		{hpt: 12}, // "points"
		{hpx: 16}, // "pixels"
		,
		{hpx: 24, level:3},
		{hidden: true}, // hide row
		{hidden: false}
	];
	ws['!rows'] = wsrows;


    writeFileXLSX(wb, "SheetJSReactAoO.xlsx");
}

const Login = () => {
	return (
		<div className='login'>
			<div className='login-container'>
				<form id='frmLogin'>
					<div className='login-form__logo-container'>
						<div className='login-form__logo'>
							<img src={logo} alt='Logo' />
						</div>
					</div>


					<div className='login-form__inputs-container'>
						<input 
							type='text'
							id='uname'
							placeholder='Username'
							autoComplete='off'
							required
						/>
						<input 
							type='password'
							id='pword'
							placeholder='Password'
							required
						/>
						<button>LOGIN</button>
                        <p>
                            <Link to='forgot-password'>Forgot Password?</Link>

							<button type='button' onClick={downloadExcel}>EXCEL</button>
                        </p>
					</div>


                    {/* waves container */}
                    <div className='login-form__waves'>
                        <svg className='waves' xmlns='//www.w3.org/2000/svg' xmlnsXlink='//www.w3.org/1999/xlink' viewBox='0 24 150 28' preserveAspectRatio='none' shapeRendering='auto'>
                            <defs>
                                <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
                            </defs>
                            <g className='parallax'>
                                <use xlinkHref='#gentle-wave' x='48' y='0' fill='rgba(65, 138, 212, 0.7)' />
                                <use xlinkHref='#gentle-wave' x='48' y='3' fill='rgba(74, 148, 209, 0.5)' />
                                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(114, 184, 229, 0.3)" />
                                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#4a94d1" />
                            </g>
                        </svg>
                    </div>
				</form>
			</div>
		</div>
	)
}

export default Login;