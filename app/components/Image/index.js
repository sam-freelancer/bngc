/**
 *
 * Image
 *
 */
import get from 'lodash/get';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animated, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';

import Images from 'images';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
const preloadingImageStyle = { width: 1, height: 1, opacity: 0 };
function Img({
  local,
  title,
  uri,
  animated,
  background,
  preloadImages,
  priority,
  ...props
}) {
  const [fallback, setFallback] = useState(title && uri ? { title } : null);

  useEffect(() => {
    if (!fallback && title && uri) {
      setFallback({ title });
      return;
    }
    if (fallback && (!title || !uri)) {
      setFallback(null);
    }
  }, [title, uri]);

  useEffect(() => {
    if (fallback) {
      FastImage.preload([source]);
    }
  }, [fallback]);

  let source = {};
  if (uri) {
    source = { uri, priority: FastImage.priority[priority] };
  } else {
    source = get(Images, title);
  }
  if (preloadImages) {
    FastImage.preload(preloadImages);
  }

  let Comp = FastImage;
  if (background) {
    Comp = ImageBackground;
  } else if (animated) {
    Comp = AnimatedFastImage;
  }

  if (fallback) {
    return (
      <>
        <Comp source={fallback} resizeMode="contain" {...props} />
        <Comp
          style={preloadingImageStyle}
          source={source}
          onLoadEnd={() => {
            setTimeout(() => {
              setFallback(null);
            }, 100);
          }}
        />
      </>
    );
  }
  return <Comp source={source} resizeMode="contain" {...props} />;
}

Img.propTypes = {
  local: PropTypes.bool,
  title: PropTypes.string,
  uri: PropTypes.string,
  animated: PropTypes.bool,
  background: PropTypes.bool,
  preloadImages: PropTypes.array,
  priority: PropTypes.oneOf(['low', 'normal', 'high']),
};

Img.defaultProps = {
  local: false,
  priority: 'normal',
  uri: '',
  animated: false,
  background: false,
  preloadImages: null,
};

export default Img;
