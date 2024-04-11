import polyline from '@mapbox/polyline';

const encodeCoordinates = (coordinates) => {
    return polyline.encode(coordinates);
};

const decodeCoordinates = (coordinates) => {
    return polyline.decode(coordinates);
};

const mergePolylineFn = (existingPolyline, encodedNewPoints) => { 
    
    // Approach:
    // keep last coord pair from existing polyline, encode just that pair and save it for later, 
    // encode all new coords with coord from existing polyline at the beginning of this new encoding. 
    // find the string of the last coordinate pair, and remove it from the new encoded polyline 
    // and stick the new encoded polyline onto the back of the existing polyline


    // Decode the existing polyline to extract the last coordinate pair
    const existingCoordinates = decodeCoordinates(existingPolyline);
    const lastCoord = existingCoordinates[existingCoordinates.length - 1];

    // Decode the encoded new points
    const newCoordinates = decodeCoordinates(encodedNewPoints);

    // Prepend the encoded last coordinate pair to the new coordinates
    newCoordinates.unshift(lastCoord);

    // Encode the new polyline
    const newPolyline = encodeCoordinates(newCoordinates);

    // Find the string of the last coordinate pair and remove it from the new encoded polyline
    const finalEncodedPolyline = newPolyline.replace(encodeCoordinates([lastCoord]), '');

    // Concatenate the existing polyline with the new encoded polyline
    return existingPolyline + finalEncodedPolyline;
};

export { mergePolylineFn };
