import { mergePolylineFn } from '../utils/merge_encoded_polyline.js';

const mergePolylineSerice = async (req, res) => {
  try{
  const { encodedPolyline1, encodedPolyline2 } = req.body;
  const mergedEncodedPolyline = mergePolylineFn(encodedPolyline1, encodedPolyline2);
  return res.status(200).json({ mergedEncodedPolyline });
  }catch (error) {
    // Handle any errors
    console.error('Error merging polylines:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { mergePolylineSerice };