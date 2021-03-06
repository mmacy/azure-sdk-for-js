/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";


export const ResponseBase: msRest.CompositeMapper = {
  serializedName: "ResponseBase",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "ResponseBase",
    className: "ResponseBase",
    modelProperties: {
      _type: {
        required: true,
        serializedName: "_type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identifiable: msRest.CompositeMapper = {
  serializedName: "Identifiable",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Identifiable",
    modelProperties: {
      ...ResponseBase.type.modelProperties,
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Response: msRest.CompositeMapper = {
  serializedName: "Response",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Response",
    modelProperties: {
      ...Identifiable.type.modelProperties,
      readLink: {
        readOnly: true,
        serializedName: "readLink",
        type: {
          name: "String"
        }
      },
      webSearchUrl: {
        readOnly: true,
        serializedName: "webSearchUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Thing: msRest.CompositeMapper = {
  serializedName: "Thing",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Thing",
    modelProperties: {
      ...Response.type.modelProperties,
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      url: {
        readOnly: true,
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      image: {
        readOnly: true,
        serializedName: "image",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "ImageObject"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      alternateName: {
        readOnly: true,
        serializedName: "alternateName",
        type: {
          name: "String"
        }
      },
      bingId: {
        readOnly: true,
        serializedName: "bingId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Organization: msRest.CompositeMapper = {
  serializedName: "Organization",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Organization",
    modelProperties: {
      ...Thing.type.modelProperties
    }
  }
};

export const PropertiesItem: msRest.CompositeMapper = {
  serializedName: "Properties/Item",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "_type",
      clientName: "_type"
    },
    uberParent: "PropertiesItem",
    className: "PropertiesItem",
    modelProperties: {
      text: {
        readOnly: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      _type: {
        required: true,
        serializedName: "_type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Rating: msRest.CompositeMapper = {
  serializedName: "Rating",
  type: {
    name: "Composite",
    polymorphicDiscriminator: PropertiesItem.type.polymorphicDiscriminator,
    uberParent: "PropertiesItem",
    className: "Rating",
    modelProperties: {
      ...PropertiesItem.type.modelProperties,
      ratingValue: {
        required: true,
        serializedName: "ratingValue",
        type: {
          name: "Number"
        }
      },
      bestRating: {
        readOnly: true,
        serializedName: "bestRating",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AggregateRating: msRest.CompositeMapper = {
  serializedName: "AggregateRating",
  type: {
    name: "Composite",
    polymorphicDiscriminator: PropertiesItem.type.polymorphicDiscriminator,
    uberParent: "PropertiesItem",
    className: "AggregateRating",
    modelProperties: {
      ...Rating.type.modelProperties,
      reviewCount: {
        readOnly: true,
        serializedName: "reviewCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Offer: msRest.CompositeMapper = {
  serializedName: "Offer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Offer",
    modelProperties: {
      ...Thing.type.modelProperties,
      seller: {
        readOnly: true,
        serializedName: "seller",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "Organization"
        }
      },
      price: {
        readOnly: true,
        serializedName: "price",
        type: {
          name: "Number"
        }
      },
      priceCurrency: {
        readOnly: true,
        serializedName: "priceCurrency",
        defaultValue: 'USD',
        type: {
          name: "String"
        }
      },
      availability: {
        readOnly: true,
        serializedName: "availability",
        type: {
          name: "String"
        }
      },
      aggregateRating: {
        readOnly: true,
        serializedName: "aggregateRating",
        type: {
          name: "Composite",
          polymorphicDiscriminator: PropertiesItem.type.polymorphicDiscriminator,
          uberParent: "PropertiesItem",
          className: "AggregateRating"
        }
      },
      lastUpdated: {
        readOnly: true,
        serializedName: "lastUpdated",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AggregateOffer: msRest.CompositeMapper = {
  serializedName: "AggregateOffer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "AggregateOffer",
    modelProperties: {
      ...Offer.type.modelProperties,
      offers: {
        readOnly: true,
        serializedName: "offers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "Offer"
            }
          }
        }
      }
    }
  }
};

export const ImagesImageMetadata: msRest.CompositeMapper = {
  serializedName: "Images/ImageMetadata",
  type: {
    name: "Composite",
    className: "ImagesImageMetadata",
    modelProperties: {
      shoppingSourcesCount: {
        readOnly: true,
        serializedName: "shoppingSourcesCount",
        type: {
          name: "Number"
        }
      },
      recipeSourcesCount: {
        readOnly: true,
        serializedName: "recipeSourcesCount",
        type: {
          name: "Number"
        }
      },
      aggregateOffer: {
        readOnly: true,
        serializedName: "aggregateOffer",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "AggregateOffer"
        }
      }
    }
  }
};

export const CreativeWork: msRest.CompositeMapper = {
  serializedName: "CreativeWork",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "CreativeWork",
    modelProperties: {
      ...Thing.type.modelProperties,
      thumbnailUrl: {
        readOnly: true,
        serializedName: "thumbnailUrl",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "Thing"
            }
          }
        }
      },
      datePublished: {
        readOnly: true,
        serializedName: "datePublished",
        type: {
          name: "String"
        }
      },
      text: {
        readOnly: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MediaObject: msRest.CompositeMapper = {
  serializedName: "MediaObject",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "MediaObject",
    modelProperties: {
      ...CreativeWork.type.modelProperties,
      contentUrl: {
        readOnly: true,
        serializedName: "contentUrl",
        type: {
          name: "String"
        }
      },
      hostPageUrl: {
        readOnly: true,
        serializedName: "hostPageUrl",
        type: {
          name: "String"
        }
      },
      contentSize: {
        readOnly: true,
        serializedName: "contentSize",
        type: {
          name: "String"
        }
      },
      encodingFormat: {
        readOnly: true,
        serializedName: "encodingFormat",
        type: {
          name: "String"
        }
      },
      hostPageDisplayUrl: {
        readOnly: true,
        serializedName: "hostPageDisplayUrl",
        type: {
          name: "String"
        }
      },
      width: {
        readOnly: true,
        serializedName: "width",
        type: {
          name: "Number"
        }
      },
      height: {
        readOnly: true,
        serializedName: "height",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ImageObject: msRest.CompositeMapper = {
  serializedName: "ImageObject",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageObject",
    modelProperties: {
      ...MediaObject.type.modelProperties,
      thumbnail: {
        readOnly: true,
        serializedName: "thumbnail",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "ImageObject"
        }
      },
      imageInsightsToken: {
        readOnly: true,
        serializedName: "imageInsightsToken",
        type: {
          name: "String"
        }
      },
      insightsMetadata: {
        readOnly: true,
        serializedName: "insightsMetadata",
        type: {
          name: "Composite",
          className: "ImagesImageMetadata"
        }
      },
      imageId: {
        readOnly: true,
        serializedName: "imageId",
        type: {
          name: "String"
        }
      },
      accentColor: {
        readOnly: true,
        serializedName: "accentColor",
        type: {
          name: "String"
        }
      },
      visualWords: {
        readOnly: true,
        serializedName: "visualWords",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Query: msRest.CompositeMapper = {
  serializedName: "Query",
  type: {
    name: "Composite",
    className: "Query",
    modelProperties: {
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      displayText: {
        readOnly: true,
        serializedName: "displayText",
        type: {
          name: "String"
        }
      },
      webSearchUrl: {
        readOnly: true,
        serializedName: "webSearchUrl",
        type: {
          name: "String"
        }
      },
      searchLink: {
        readOnly: true,
        serializedName: "searchLink",
        type: {
          name: "String"
        }
      },
      thumbnail: {
        readOnly: true,
        serializedName: "thumbnail",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "ImageObject"
        }
      }
    }
  }
};

export const PivotSuggestions: msRest.CompositeMapper = {
  serializedName: "PivotSuggestions",
  type: {
    name: "Composite",
    className: "PivotSuggestions",
    modelProperties: {
      pivot: {
        required: true,
        serializedName: "pivot",
        type: {
          name: "String"
        }
      },
      suggestions: {
        required: true,
        serializedName: "suggestions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Query"
            }
          }
        }
      }
    }
  }
};

export const Answer: msRest.CompositeMapper = {
  serializedName: "Answer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Answer",
    modelProperties: {
      ...Response.type.modelProperties
    }
  }
};

export const SearchResultsAnswer: msRest.CompositeMapper = {
  serializedName: "SearchResultsAnswer",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "SearchResultsAnswer",
    modelProperties: {
      ...Answer.type.modelProperties,
      totalEstimatedMatches: {
        readOnly: true,
        serializedName: "totalEstimatedMatches",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Images: msRest.CompositeMapper = {
  serializedName: "Images",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Images",
    modelProperties: {
      ...SearchResultsAnswer.type.modelProperties,
      nextOffset: {
        readOnly: true,
        serializedName: "nextOffset",
        type: {
          name: "Number"
        }
      },
      value: {
        required: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "ImageObject"
            }
          }
        }
      },
      queryExpansions: {
        readOnly: true,
        serializedName: "queryExpansions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Query"
            }
          }
        }
      },
      pivotSuggestions: {
        readOnly: true,
        serializedName: "pivotSuggestions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PivotSuggestions"
            }
          }
        }
      },
      similarTerms: {
        readOnly: true,
        serializedName: "similarTerms",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Query"
            }
          }
        }
      }
    }
  }
};

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        defaultValue: 'None',
        type: {
          name: "String"
        }
      },
      subCode: {
        readOnly: true,
        serializedName: "subCode",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      moreDetails: {
        readOnly: true,
        serializedName: "moreDetails",
        type: {
          name: "String"
        }
      },
      parameter: {
        readOnly: true,
        serializedName: "parameter",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ErrorResponse",
    modelProperties: {
      ...Response.type.modelProperties,
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorModel"
            }
          }
        }
      }
    }
  }
};

export const ImageInsightsImageCaption: msRest.CompositeMapper = {
  serializedName: "ImageInsights/ImageCaption",
  type: {
    name: "Composite",
    className: "ImageInsightsImageCaption",
    modelProperties: {
      caption: {
        required: true,
        serializedName: "caption",
        type: {
          name: "String"
        }
      },
      dataSourceUrl: {
        required: true,
        serializedName: "dataSourceUrl",
        type: {
          name: "String"
        }
      },
      relatedSearches: {
        required: true,
        serializedName: "relatedSearches",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Query"
            }
          }
        }
      }
    }
  }
};

export const WebPage: msRest.CompositeMapper = {
  serializedName: "WebPage",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "WebPage",
    modelProperties: {
      ...CreativeWork.type.modelProperties
    }
  }
};

export const CollectionPage: msRest.CompositeMapper = {
  serializedName: "CollectionPage",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "CollectionPage",
    modelProperties: {
      ...WebPage.type.modelProperties
    }
  }
};

export const ImageGallery: msRest.CompositeMapper = {
  serializedName: "ImageGallery",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageGallery",
    modelProperties: {
      ...CollectionPage.type.modelProperties,
      source: {
        readOnly: true,
        serializedName: "source",
        type: {
          name: "String"
        }
      },
      imagesCount: {
        readOnly: true,
        serializedName: "imagesCount",
        type: {
          name: "Number"
        }
      },
      followersCount: {
        readOnly: true,
        serializedName: "followersCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RelatedCollectionsModule: msRest.CompositeMapper = {
  serializedName: "RelatedCollectionsModule",
  type: {
    name: "Composite",
    className: "RelatedCollectionsModule",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "ImageGallery"
            }
          }
        }
      }
    }
  }
};

export const ImagesModule: msRest.CompositeMapper = {
  serializedName: "ImagesModule",
  type: {
    name: "Composite",
    className: "ImagesModule",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "ImageObject"
            }
          }
        }
      }
    }
  }
};

export const RelatedSearchesModule: msRest.CompositeMapper = {
  serializedName: "RelatedSearchesModule",
  type: {
    name: "Composite",
    className: "RelatedSearchesModule",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Query"
            }
          }
        }
      }
    }
  }
};

export const Recipe: msRest.CompositeMapper = {
  serializedName: "Recipe",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Recipe",
    modelProperties: {
      ...CreativeWork.type.modelProperties,
      cookTime: {
        readOnly: true,
        serializedName: "cookTime",
        type: {
          name: "String"
        }
      },
      prepTime: {
        readOnly: true,
        serializedName: "prepTime",
        type: {
          name: "String"
        }
      },
      totalTime: {
        readOnly: true,
        serializedName: "totalTime",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RecipesModule: msRest.CompositeMapper = {
  serializedName: "RecipesModule",
  type: {
    name: "Composite",
    className: "RecipesModule",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "Recipe"
            }
          }
        }
      }
    }
  }
};

export const Intangible: msRest.CompositeMapper = {
  serializedName: "Intangible",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Intangible",
    modelProperties: {
      ...Thing.type.modelProperties
    }
  }
};

export const StructuredValue: msRest.CompositeMapper = {
  serializedName: "StructuredValue",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "StructuredValue",
    modelProperties: {
      ...Intangible.type.modelProperties
    }
  }
};

export const NormalizedRectangle: msRest.CompositeMapper = {
  serializedName: "NormalizedRectangle",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "NormalizedRectangle",
    modelProperties: {
      ...StructuredValue.type.modelProperties,
      left: {
        required: true,
        serializedName: "left",
        type: {
          name: "Number"
        }
      },
      top: {
        required: true,
        serializedName: "top",
        type: {
          name: "Number"
        }
      },
      right: {
        required: true,
        serializedName: "right",
        type: {
          name: "Number"
        }
      },
      bottom: {
        required: true,
        serializedName: "bottom",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RecognizedEntity: msRest.CompositeMapper = {
  serializedName: "RecognizedEntity",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "RecognizedEntity",
    modelProperties: {
      ...Response.type.modelProperties,
      entity: {
        readOnly: true,
        serializedName: "entity",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "Thing"
        }
      },
      matchConfidence: {
        readOnly: true,
        serializedName: "matchConfidence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RecognizedEntityRegion: msRest.CompositeMapper = {
  serializedName: "RecognizedEntityRegion",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "RecognizedEntityRegion",
    modelProperties: {
      ...Response.type.modelProperties,
      region: {
        readOnly: true,
        serializedName: "region",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "NormalizedRectangle"
        }
      },
      matchingEntities: {
        readOnly: true,
        serializedName: "matchingEntities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "RecognizedEntity"
            }
          }
        }
      }
    }
  }
};

export const RecognizedEntityGroup: msRest.CompositeMapper = {
  serializedName: "RecognizedEntityGroup",
  type: {
    name: "Composite",
    className: "RecognizedEntityGroup",
    modelProperties: {
      recognizedEntityRegions: {
        required: true,
        serializedName: "recognizedEntityRegions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
              uberParent: "ResponseBase",
              className: "RecognizedEntityRegion"
            }
          }
        }
      },
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RecognizedEntitiesModule: msRest.CompositeMapper = {
  serializedName: "RecognizedEntitiesModule",
  type: {
    name: "Composite",
    className: "RecognizedEntitiesModule",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RecognizedEntityGroup"
            }
          }
        }
      }
    }
  }
};

export const InsightsTag: msRest.CompositeMapper = {
  serializedName: "InsightsTag",
  type: {
    name: "Composite",
    className: "InsightsTag",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ImageTagsModule: msRest.CompositeMapper = {
  serializedName: "ImageTagsModule",
  type: {
    name: "Composite",
    className: "ImageTagsModule",
    modelProperties: {
      value: {
        required: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "InsightsTag"
            }
          }
        }
      }
    }
  }
};

export const ImageInsights: msRest.CompositeMapper = {
  serializedName: "ImageInsights",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "ImageInsights",
    modelProperties: {
      ...Response.type.modelProperties,
      imageInsightsToken: {
        readOnly: true,
        serializedName: "imageInsightsToken",
        type: {
          name: "String"
        }
      },
      bestRepresentativeQuery: {
        readOnly: true,
        serializedName: "bestRepresentativeQuery",
        type: {
          name: "Composite",
          className: "Query"
        }
      },
      imageCaption: {
        readOnly: true,
        serializedName: "imageCaption",
        type: {
          name: "Composite",
          className: "ImageInsightsImageCaption"
        }
      },
      relatedCollections: {
        readOnly: true,
        serializedName: "relatedCollections",
        type: {
          name: "Composite",
          className: "RelatedCollectionsModule"
        }
      },
      pagesIncluding: {
        readOnly: true,
        serializedName: "pagesIncluding",
        type: {
          name: "Composite",
          className: "ImagesModule"
        }
      },
      shoppingSources: {
        readOnly: true,
        serializedName: "shoppingSources",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "AggregateOffer"
        }
      },
      relatedSearches: {
        readOnly: true,
        serializedName: "relatedSearches",
        type: {
          name: "Composite",
          className: "RelatedSearchesModule"
        }
      },
      recipes: {
        readOnly: true,
        serializedName: "recipes",
        type: {
          name: "Composite",
          className: "RecipesModule"
        }
      },
      visuallySimilarImages: {
        readOnly: true,
        serializedName: "visuallySimilarImages",
        type: {
          name: "Composite",
          className: "ImagesModule"
        }
      },
      visuallySimilarProducts: {
        readOnly: true,
        serializedName: "visuallySimilarProducts",
        type: {
          name: "Composite",
          className: "ImagesModule"
        }
      },
      recognizedEntityGroups: {
        readOnly: true,
        serializedName: "recognizedEntityGroups",
        type: {
          name: "Composite",
          className: "RecognizedEntitiesModule"
        }
      },
      imageTags: {
        readOnly: true,
        serializedName: "imageTags",
        type: {
          name: "Composite",
          className: "ImageTagsModule"
        }
      }
    }
  }
};

export const TrendingImagesTile: msRest.CompositeMapper = {
  serializedName: "TrendingImages/Tile",
  type: {
    name: "Composite",
    className: "TrendingImagesTile",
    modelProperties: {
      query: {
        required: true,
        serializedName: "query",
        type: {
          name: "Composite",
          className: "Query"
        }
      },
      image: {
        required: true,
        serializedName: "image",
        type: {
          name: "Composite",
          polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
          uberParent: "ResponseBase",
          className: "ImageObject"
        }
      }
    }
  }
};

export const TrendingImagesCategory: msRest.CompositeMapper = {
  serializedName: "TrendingImages/Category",
  type: {
    name: "Composite",
    className: "TrendingImagesCategory",
    modelProperties: {
      title: {
        required: true,
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      tiles: {
        required: true,
        serializedName: "tiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TrendingImagesTile"
            }
          }
        }
      }
    }
  }
};

export const TrendingImages: msRest.CompositeMapper = {
  serializedName: "TrendingImages",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "TrendingImages",
    modelProperties: {
      ...Response.type.modelProperties,
      categories: {
        required: true,
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TrendingImagesCategory"
            }
          }
        }
      }
    }
  }
};

export const Person: msRest.CompositeMapper = {
  serializedName: "Person",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ResponseBase.type.polymorphicDiscriminator,
    uberParent: "ResponseBase",
    className: "Person",
    modelProperties: {
      ...Thing.type.modelProperties,
      jobTitle: {
        readOnly: true,
        serializedName: "jobTitle",
        type: {
          name: "String"
        }
      },
      twitterProfile: {
        readOnly: true,
        serializedName: "twitterProfile",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'ResponseBase.Organization' : Organization,
  'PropertiesItem.AggregateRating' : AggregateRating,
  'ResponseBase.Offer' : Offer,
  'ResponseBase.AggregateOffer' : AggregateOffer,
  'ResponseBase.ImageObject' : ImageObject,
  'ResponseBase.Images' : Images,
  'ResponseBase.SearchResultsAnswer' : SearchResultsAnswer,
  'ResponseBase.Answer' : Answer,
  'ResponseBase.MediaObject' : MediaObject,
  'ResponseBase.Response' : Response,
  'ResponseBase.Thing' : Thing,
  'ResponseBase.CreativeWork' : CreativeWork,
  'ResponseBase.Identifiable' : Identifiable,
  'ResponseBase.ErrorResponse' : ErrorResponse,
  'ResponseBase.ImageGallery' : ImageGallery,
  'ResponseBase.Recipe' : Recipe,
  'ResponseBase.NormalizedRectangle' : NormalizedRectangle,
  'ResponseBase.RecognizedEntity' : RecognizedEntity,
  'ResponseBase.RecognizedEntityRegion' : RecognizedEntityRegion,
  'ResponseBase.ImageInsights' : ImageInsights,
  'ResponseBase.TrendingImages' : TrendingImages,
  'Properties/Item' : PropertiesItem,
  'ResponseBase.WebPage' : WebPage,
  'ResponseBase' : ResponseBase,
  'ResponseBase.Person' : Person,
  'ResponseBase.Intangible' : Intangible,
  'PropertiesItem.Rating' : Rating,
  'ResponseBase.CollectionPage' : CollectionPage,
  'ResponseBase.StructuredValue' : StructuredValue
};
