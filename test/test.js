/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Slice = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var nonreducedDimensions = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nonreducedDimensions, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns nonreduced dimensions (nulls)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		new MultiSlice( null ),
		new MultiSlice( null, null ),
		new MultiSlice( null, null, null )
	];
	expected = [
		[ 0 ],
		[ 0, 1 ],
		[ 0, 1, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = nonreducedDimensions( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns nonreduced dimensions (undefined)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		new MultiSlice( void 0 ),
		new MultiSlice( void 0, void 0 ),
		new MultiSlice( void 0, void 0, void 0 )
	];
	expected = [
		[ 0 ],
		[ 0, 1 ],
		[ 0, 1, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = nonreducedDimensions( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns nonreduced dimensions (integers)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		new MultiSlice( 5 ),
		new MultiSlice( -4, 10 ),
		new MultiSlice( -4, -1, 3 )
	];
	expected = [
		[],
		[],
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = nonreducedDimensions( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns nonreduced dimensions (Slices)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		new MultiSlice( new Slice() ),
		new MultiSlice( new Slice( 10 ) ),
		new MultiSlice( new Slice( 2, 10 ) ),
		new MultiSlice( new Slice( 2, null ) ),
		new MultiSlice( new Slice( null, 10 ) ),
		new MultiSlice( new Slice( -2 ) ),
		new MultiSlice( new Slice( -5, -2 ) ),
		new MultiSlice( new Slice( -5, null ) ),
		new MultiSlice( new Slice( null, null, null ) ),
		new MultiSlice( new Slice( 2, 10, 2 ) ),
		new MultiSlice( new Slice( -2, -10, -2 ) ),
		new MultiSlice( new Slice( -2, -11, -2 ) ),
		new MultiSlice( new Slice( null, 10, 2 ) ),
		new MultiSlice( new Slice( 2, null, 2 ) ),
		new MultiSlice( new Slice( 2, 10, null ) ),
		new MultiSlice( new Slice( null, null, 2 ) ),
		new MultiSlice( new Slice( 2, null, null ) ),
		new MultiSlice( new Slice( null, 10, null ) ),
		new MultiSlice( new Slice( -1, null, -2 ), new Slice(), new Slice() )
	];
	expected = [
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0 ],
		[ 0, 1, 2 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = nonreducedDimensions( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns nonreduced dimensions (mixed)', function test( t ) {
	var expected;
	var values;
	var actual;
	var i;

	values = [
		new MultiSlice( 5, null, new Slice() ),
		new MultiSlice( -4, new Slice(), 10 ),
		new MultiSlice( -4, null, -1, null, 3 )
	];
	expected = [
		[ 1, 2 ],
		[ 1 ],
		[ 1, 3 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = nonreducedDimensions( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});
