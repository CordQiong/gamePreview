System.register("chunks:///_virtual/builtin-pipeline-settings.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './builtin-pipeline-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Camera, CCBoolean, CCInteger, CCFloat, Material, Texture2D, rendering, Component, fillRequiredPipelineSettings, makePipelineSettings;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      CCBoolean = module.CCBoolean;
      CCInteger = module.CCInteger;
      CCFloat = module.CCFloat;
      Material = module.Material;
      Texture2D = module.Texture2D;
      rendering = module.rendering;
      Component = module.Component;
    }, function (module) {
      fillRequiredPipelineSettings = module.fillRequiredPipelineSettings;
      makePipelineSettings = module.makePipelineSettings;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "de1c2EHcMhAIYRZY5nyTQHG", "builtin-pipeline-settings", undefined);
      var ccclass = _decorator.ccclass,
        disallowMultiple = _decorator.disallowMultiple,
        executeInEditMode = _decorator.executeInEditMode,
        menu = _decorator.menu,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent,
        type = _decorator.type;
      var BuiltinPipelineSettings = exports('BuiltinPipelineSettings', (_dec = ccclass('BuiltinPipelineSettings'), _dec2 = menu('Rendering/BuiltinPipelineSettings'), _dec3 = requireComponent(Camera), _dec4 = property(CCBoolean), _dec5 = property({
        displayName: 'Editor Preview (Experimental)',
        type: CCBoolean
      }), _dec6 = property({
        group: {
          id: 'MSAA',
          name: 'Multisample Anti-Aliasing'
        },
        type: CCBoolean
      }), _dec7 = property({
        group: {
          id: 'MSAA',
          name: 'Multisample Anti-Aliasing',
          style: 'section'
        },
        type: CCInteger,
        range: [2, 4, 2]
      }), _dec8 = property({
        group: {
          id: 'ShadingScale',
          name: 'ShadingScale',
          style: 'section'
        },
        type: CCBoolean
      }), _dec9 = property({
        tooltip: 'i18n:postprocess.shadingScale',
        group: {
          id: 'ShadingScale',
          name: 'ShadingScale'
        },
        type: CCFloat,
        range: [0.01, 4, 0.01],
        slide: true
      }), _dec10 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean,
        visible: false
      }), _dec11 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: Material,
        visible: false
      }), _dec12 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        min: 0,
        visible: false
      }), _dec13 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        min: 0,
        visible: false
      }), _dec14 = type(CCFloat), _dec15 = property({
        group: {
          id: 'DepthOfField',
          name: 'DepthOfField (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        range: [1, 10, 0.01],
        slide: true,
        visible: false
      }), _dec16 = property({
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec17 = property({
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec18 = property({
        tooltip: 'i18n:bloom.enableAlphaMask',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec19 = property({
        tooltip: 'i18n:bloom.iterations',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCInteger,
        range: [1, 6, 1],
        slide: true
      }), _dec20 = property({
        tooltip: 'i18n:bloom.threshold',
        group: {
          id: 'Bloom',
          name: 'Bloom (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        min: 0
      }), _dec21 = property({
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec22 = property({
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec23 = property({
        tooltip: 'i18n:color_grading.contribute',
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: CCFloat,
        range: [0, 1, 0.01],
        slide: true
      }), _dec24 = property({
        tooltip: 'i18n:color_grading.originalMap',
        group: {
          id: 'Color Grading',
          name: 'ColorGrading (LDR) (PostProcessing)',
          style: 'section'
        },
        type: Texture2D
      }), _dec25 = property({
        group: {
          id: 'FXAA',
          name: 'Fast Approximate Anti-Aliasing (PostProcessing)',
          style: 'section'
        },
        type: CCBoolean
      }), _dec26 = property({
        group: {
          id: 'FXAA',
          name: 'Fast Approximate Anti-Aliasing (PostProcessing)',
          style: 'section'
        },
        type: Material
      }), _dec27 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: CCBoolean
      }), _dec28 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: Material
      }), _dec29 = property({
        group: {
          id: 'FSR',
          name: 'FidelityFX Super Resolution',
          style: 'section'
        },
        type: CCFloat,
        range: [0, 1, 0.01],
        slide: true
      }), _dec30 = property({
        group: {
          id: 'ToneMapping',
          name: 'ToneMapping',
          style: 'section'
        },
        type: Material
      }), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BuiltinPipelineSettings, _Component);
        function BuiltinPipelineSettings() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_settings", _descriptor, _assertThisInitialized(_this));
          // Editor Preview
          _initializerDefineProperty(_this, "_editorPreview", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BuiltinPipelineSettings.prototype;
        // Enable/Disable
        _proto.onEnable = function onEnable() {
          fillRequiredPipelineSettings(this._settings);
          var cameraComponent = this.getComponent(Camera);
          var camera = cameraComponent.camera;
          camera.pipelineSettings = this._settings;
        };
        _proto.onDisable = function onDisable() {
          var cameraComponent = this.getComponent(Camera);
          var camera = cameraComponent.camera;
          camera.pipelineSettings = null;
        };
        _proto._tryEnableEditorPreview = function _tryEnableEditorPreview() {
          if (rendering === undefined) {
            return;
          }
          if (this._editorPreview) {
            rendering.setEditorPipelineSettings(this._settings);
          } else {
            this._disableEditorPreview();
          }
        };
        _proto._disableEditorPreview = function _disableEditorPreview() {
          if (rendering === undefined) {
            return;
          }
          var current = rendering.getEditorPipelineSettings();
          if (current === this._settings) {
            rendering.setEditorPipelineSettings(null);
          }
        }

        // MSAA
        ;

        _createClass(BuiltinPipelineSettings, [{
          key: "editorPreview",
          get: function get() {
            return this._editorPreview;
          },
          set: function set(v) {
            this._editorPreview = v;
          }
        }, {
          key: "MsaaEnable",
          get: function get() {
            return this._settings.msaa.enabled;
          },
          set: function set(value) {
            this._settings.msaa.enabled = value;
          }
        }, {
          key: "msaaSampleCount",
          get: function get() {
            return this._settings.msaa.sampleCount;
          }

          // Shading Scale
          ,

          set: function set(value) {
            value = Math.pow(2, Math.ceil(Math.log2(Math.max(value, 2))));
            value = Math.min(value, 4);
            this._settings.msaa.sampleCount = value;
          }
        }, {
          key: "shadingScaleEnable",
          get: function get() {
            return this._settings.enableShadingScale;
          },
          set: function set(value) {
            this._settings.enableShadingScale = value;
          }
        }, {
          key: "shadingScale",
          get: function get() {
            return this._settings.shadingScale;
          }

          // DepthOfField
          ,

          set: function set(value) {
            this._settings.shadingScale = value;
          }
        }, {
          key: "dofEnable",
          get: function get() {
            return this._settings.depthOfField.enabled;
          },
          set: function set(value) {
            this._settings.depthOfField.enabled = value;
          }
        }, {
          key: "dofMaterial",
          get: function get() {
            return this._settings.depthOfField.material;
          },
          set: function set(value) {
            if (this._settings.depthOfField.material === value) {
              return;
            }
            this._settings.depthOfField.material = value;
          }
        }, {
          key: "dofFocusDistance",
          get: function get() {
            return this._settings.depthOfField.focusDistance;
          },
          set: function set(value) {
            this._settings.depthOfField.focusDistance = value;
          }
        }, {
          key: "dofFocusRange",
          get: function get() {
            return this._settings.depthOfField.focusRange;
          },
          set: function set(value) {
            this._settings.depthOfField.focusRange = value;
          }
        }, {
          key: "dofBokehRadius",
          get: function get() {
            return this._settings.depthOfField.bokehRadius;
          }

          // Bloom
          ,

          set: function set(value) {
            this._settings.depthOfField.bokehRadius = value;
          }
        }, {
          key: "bloomEnable",
          get: function get() {
            return this._settings.bloom.enabled;
          },
          set: function set(value) {
            this._settings.bloom.enabled = value;
          }
        }, {
          key: "bloomMaterial",
          get: function get() {
            return this._settings.bloom.material;
          },
          set: function set(value) {
            if (this._settings.bloom.material === value) {
              return;
            }
            this._settings.bloom.material = value;
          }
        }, {
          key: "bloomEnableAlphaMask",
          get: function get() {
            return this._settings.bloom.enableAlphaMask;
          },
          set: function set(value) {
            this._settings.bloom.enableAlphaMask = value;
          }
        }, {
          key: "bloomIterations",
          get: function get() {
            return this._settings.bloom.iterations;
          },
          set: function set(value) {
            this._settings.bloom.iterations = value;
          }
        }, {
          key: "bloomThreshold",
          get: function get() {
            return this._settings.bloom.threshold;
          },
          set: function set(value) {
            this._settings.bloom.threshold = value;
          }
        }, {
          key: "bloomIntensity",
          get: function get() {
            return this._settings.bloom.intensity;
          }

          // Color Grading (LDR)
          ,

          set: function set(value) {
            this._settings.bloom.intensity = value;
          }
        }, {
          key: "colorGradingEnable",
          get: function get() {
            return this._settings.colorGrading.enabled;
          },
          set: function set(value) {
            this._settings.colorGrading.enabled = value;
          }
        }, {
          key: "colorGradingMaterial",
          get: function get() {
            return this._settings.colorGrading.material;
          },
          set: function set(value) {
            if (this._settings.colorGrading.material === value) {
              return;
            }
            this._settings.colorGrading.material = value;
          }
        }, {
          key: "colorGradingContribute",
          get: function get() {
            return this._settings.colorGrading.contribute;
          },
          set: function set(value) {
            this._settings.colorGrading.contribute = value;
          }
        }, {
          key: "colorGradingMap",
          get: function get() {
            return this._settings.colorGrading.colorGradingMap;
          }

          // FXAA
          ,

          set: function set(val) {
            this._settings.colorGrading.colorGradingMap = val;
          }
        }, {
          key: "fxaaEnable",
          get: function get() {
            return this._settings.fxaa.enabled;
          },
          set: function set(value) {
            this._settings.fxaa.enabled = value;
          }
        }, {
          key: "fxaaMaterial",
          get: function get() {
            return this._settings.fxaa.material;
          }

          // FSR
          ,

          set: function set(value) {
            if (this._settings.fxaa.material === value) {
              return;
            }
            this._settings.fxaa.material = value;
          }
        }, {
          key: "fsrEnable",
          get: function get() {
            return this._settings.fsr.enabled;
          },
          set: function set(value) {
            this._settings.fsr.enabled = value;
          }
        }, {
          key: "fsrMaterial",
          get: function get() {
            return this._settings.fsr.material;
          },
          set: function set(value) {
            if (this._settings.fsr.material === value) {
              return;
            }
            this._settings.fsr.material = value;
          }
        }, {
          key: "fsrSharpness",
          get: function get() {
            return this._settings.fsr.sharpness;
          },
          set: function set(value) {
            this._settings.fsr.sharpness = value;
          }
        }, {
          key: "toneMappingMaterial",
          get: function get() {
            return this._settings.toneMapping.material;
          },
          set: function set(value) {
            if (this._settings.toneMapping.material === value) {
              return;
            }
            this._settings.toneMapping.material = value;
          }
        }]);
        return BuiltinPipelineSettings;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_settings", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return makePipelineSettings();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_editorPreview", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "editorPreview", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "editorPreview"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "MsaaEnable", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "MsaaEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "msaaSampleCount", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "msaaSampleCount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadingScaleEnable", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "shadingScaleEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "shadingScale", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "shadingScale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofEnable", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "dofEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofMaterial", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "dofMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofFocusDistance", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "dofFocusDistance"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofFocusRange", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "dofFocusRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "dofBokehRadius", [_dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "dofBokehRadius"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomEnable", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomMaterial", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomEnableAlphaMask", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomEnableAlphaMask"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomIterations", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomIterations"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bloomThreshold", [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "bloomThreshold"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingEnable", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingMaterial", [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingContribute", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingContribute"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "colorGradingMap", [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "colorGradingMap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fxaaEnable", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "fxaaEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fxaaMaterial", [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "fxaaMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrEnable", [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrEnable"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrMaterial", [_dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrMaterial"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fsrSharpness", [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "fsrSharpness"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "toneMappingMaterial", [_dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "toneMappingMaterial"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/builtin-pipeline-types.ts", ['cc'], function (exports) {
  var cclegacy, gfx;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      gfx = module.gfx;
    }],
    execute: function () {
      exports({
        fillRequiredBloom: fillRequiredBloom,
        fillRequiredColorGrading: fillRequiredColorGrading,
        fillRequiredDepthOfField: fillRequiredDepthOfField,
        fillRequiredFSR: fillRequiredFSR,
        fillRequiredFXAA: fillRequiredFXAA,
        fillRequiredHBAO: fillRequiredHBAO,
        fillRequiredMSAA: fillRequiredMSAA,
        fillRequiredPipelineSettings: fillRequiredPipelineSettings,
        fillRequiredToneMapping: fillRequiredToneMapping,
        makeBloom: makeBloom,
        makeColorGrading: makeColorGrading,
        makeDepthOfField: makeDepthOfField,
        makeFSR: makeFSR,
        makeFXAA: makeFXAA,
        makeHBAO: makeHBAO,
        makeMSAA: makeMSAA,
        makePipelineSettings: makePipelineSettings,
        makeToneMapping: makeToneMapping
      });
      cclegacy._RF.push({}, "cbf30kCUX9A3K+QpVC6wnzx", "builtin-pipeline-types", undefined);
      var SampleCount = gfx.SampleCount;
      function makeMSAA() {
        return {
          enabled: false,
          sampleCount: SampleCount.X4
        };
      }
      function fillRequiredMSAA(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.sampleCount === undefined) {
          value.sampleCount = SampleCount.X4;
        }
      }
      function makeHBAO() {
        return {
          enabled: false,
          radiusScale: 1,
          angleBiasDegree: 10,
          blurSharpness: 3,
          aoSaturation: 1,
          needBlur: false
        };
      }
      function fillRequiredHBAO(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.radiusScale === undefined) {
          value.radiusScale = 1;
        }
        if (value.angleBiasDegree === undefined) {
          value.angleBiasDegree = 10;
        }
        if (value.blurSharpness === undefined) {
          value.blurSharpness = 3;
        }
        if (value.aoSaturation === undefined) {
          value.aoSaturation = 1;
        }
        if (value.needBlur === undefined) {
          value.needBlur = false;
        }
      }
      function makeDepthOfField() {
        return {
          enabled: false,
          material: null,
          focusDistance: 0,
          focusRange: 0,
          bokehRadius: 1
        };
      }
      function fillRequiredDepthOfField(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.focusDistance === undefined) {
          value.focusDistance = 0;
        }
        if (value.focusRange === undefined) {
          value.focusRange = 0;
        }
        if (value.bokehRadius === undefined) {
          value.bokehRadius = 1;
        }
      }
      function makeBloom() {
        return {
          enabled: false,
          material: null,
          enableAlphaMask: false,
          iterations: 3,
          threshold: 0.8,
          intensity: 2.3
        };
      }
      function fillRequiredBloom(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.enableAlphaMask === undefined) {
          value.enableAlphaMask = false;
        }
        if (value.iterations === undefined) {
          value.iterations = 3;
        }
        if (value.threshold === undefined) {
          value.threshold = 0.8;
        }
        if (value.intensity === undefined) {
          value.intensity = 2.3;
        }
      }
      function makeColorGrading() {
        return {
          enabled: false,
          material: null,
          contribute: 1,
          colorGradingMap: null
        };
      }
      function fillRequiredColorGrading(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.contribute === undefined) {
          value.contribute = 1;
        }
        if (value.colorGradingMap === undefined) {
          value.colorGradingMap = null;
        }
      }
      function makeFSR() {
        return {
          enabled: false,
          material: null,
          sharpness: 0.8
        };
      }
      function fillRequiredFSR(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
        if (value.sharpness === undefined) {
          value.sharpness = 0.8;
        }
      }
      function makeFXAA() {
        return {
          enabled: false,
          material: null
        };
      }
      function fillRequiredFXAA(value) {
        if (value.enabled === undefined) {
          value.enabled = false;
        }
        if (value.material === undefined) {
          value.material = null;
        }
      }
      function makeToneMapping() {
        return {
          material: null
        };
      }
      function fillRequiredToneMapping(value) {
        if (value.material === undefined) {
          value.material = null;
        }
      }
      function makePipelineSettings() {
        return {
          msaa: makeMSAA(),
          enableShadingScale: false,
          shadingScale: 0.5,
          depthOfField: makeDepthOfField(),
          bloom: makeBloom(),
          toneMapping: makeToneMapping(),
          colorGrading: makeColorGrading(),
          fsr: makeFSR(),
          fxaa: makeFXAA()
        };
      }
      function fillRequiredPipelineSettings(value) {
        if (!value.msaa) {
          value.msaa = makeMSAA();
        } else {
          fillRequiredMSAA(value.msaa);
        }
        if (value.enableShadingScale === undefined) {
          value.enableShadingScale = false;
        }
        if (value.shadingScale === undefined) {
          value.shadingScale = 0.5;
        }
        if (!value.depthOfField) {
          value.depthOfField = makeDepthOfField();
        } else {
          fillRequiredDepthOfField(value.depthOfField);
        }
        if (!value.bloom) {
          value.bloom = makeBloom();
        } else {
          fillRequiredBloom(value.bloom);
        }
        if (!value.toneMapping) {
          value.toneMapping = makeToneMapping();
        } else {
          fillRequiredToneMapping(value.toneMapping);
        }
        if (!value.colorGrading) {
          value.colorGrading = makeColorGrading();
        } else {
          fillRequiredColorGrading(value.colorGrading);
        }
        if (!value.fsr) {
          value.fsr = makeFSR();
        } else {
          fillRequiredFSR(value.fsr);
        }
        if (!value.fxaa) {
          value.fxaa = makeFXAA();
        } else {
          fillRequiredFXAA(value.fxaa);
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/builtin-pipeline.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './builtin-pipeline-types.ts'], function () {
  var _createForOfIteratorHelperLoose, cclegacy, geometry, gfx, renderer, rendering, Vec3, Vec4, Vec2, Material, PipelineEventType, assert, warn, clamp, sys, pipeline, Layers, makePipelineSettings;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      geometry = module.geometry;
      gfx = module.gfx;
      renderer = module.renderer;
      rendering = module.rendering;
      Vec3 = module.Vec3;
      Vec4 = module.Vec4;
      Vec2 = module.Vec2;
      Material = module.Material;
      PipelineEventType = module.PipelineEventType;
      assert = module.assert;
      warn = module.warn;
      clamp = module.clamp;
      sys = module.sys;
      pipeline = module.pipeline;
      Layers = module.Layers;
    }, function (module) {
      makePipelineSettings = module.makePipelineSettings;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff9b0GZzgRM/obMbHGfCNbk", "builtin-pipeline", undefined);
      var AABB = geometry.AABB,
        Sphere = geometry.Sphere,
        intersect = geometry.intersect;
      var ClearFlagBit = gfx.ClearFlagBit,
        Color = gfx.Color,
        Format = gfx.Format,
        FormatFeatureBit = gfx.FormatFeatureBit,
        LoadOp = gfx.LoadOp,
        StoreOp = gfx.StoreOp,
        TextureType = gfx.TextureType,
        Viewport = gfx.Viewport;
      var scene = renderer.scene;
      var CameraUsage = scene.CameraUsage,
        CSMLevel = scene.CSMLevel,
        LightType = scene.LightType;
      function forwardNeedClearColor(camera) {
        return !!(camera.clearFlag & (ClearFlagBit.COLOR | ClearFlagBit.STENCIL << 1));
      }
      function getCsmMainLightViewport(light, w, h, level, vp, screenSpaceSignY) {
        if (light.shadowFixedArea || light.csmLevel === CSMLevel.LEVEL_1) {
          vp.left = 0;
          vp.top = 0;
          vp.width = Math.trunc(w);
          vp.height = Math.trunc(h);
        } else {
          vp.left = Math.trunc(level % 2 * 0.5 * w);
          if (screenSpaceSignY > 0) {
            vp.top = Math.trunc((1 - Math.floor(level / 2)) * 0.5 * h);
          } else {
            vp.top = Math.trunc(Math.floor(level / 2) * 0.5 * h);
          }
          vp.width = Math.trunc(0.5 * w);
          vp.height = Math.trunc(0.5 * h);
        }
        vp.left = Math.max(0, vp.left);
        vp.top = Math.max(0, vp.top);
        vp.width = Math.max(1, vp.width);
        vp.height = Math.max(1, vp.height);
      }
      var PipelineConfigs = function PipelineConfigs() {
        this.isWeb = false;
        this.isWebGL1 = false;
        this.isWebGPU = false;
        this.isMobile = false;
        this.isHDR = false;
        this.useFloatOutput = false;
        this.toneMappingType = 0;
        // 0: ACES, 1: None
        this.shadowEnabled = false;
        this.shadowMapFormat = Format.R32F;
        this.shadowMapSize = new Vec2(1, 1);
        this.usePlanarShadow = false;
        this.screenSpaceSignY = 1;
        this.supportDepthSample = false;
        this.mobileMaxSpotLightShadowMaps = 1;
        this.platform = new Vec4(0, 0, 0, 0);
      };
      function setupPipelineConfigs(ppl, configs) {
        var sampleFeature = FormatFeatureBit.SAMPLED_TEXTURE | FormatFeatureBit.LINEAR_FILTER;
        var device = ppl.device;
        // Platform
        configs.isWeb = !sys.isNative;
        configs.isWebGL1 = device.gfxAPI === gfx.API.WEBGL;
        configs.isWebGPU = device.gfxAPI === gfx.API.WEBGPU;
        configs.isMobile = sys.isMobile;

        // Rendering
        configs.isHDR = ppl.pipelineSceneData.isHDR; // Has tone mapping
        configs.useFloatOutput = ppl.getMacroBool('CC_USE_FLOAT_OUTPUT');
        configs.toneMappingType = ppl.pipelineSceneData.postSettings.toneMappingType;
        // Shadow
        var shadowInfo = ppl.pipelineSceneData.shadows;
        configs.shadowEnabled = shadowInfo.enabled;
        configs.shadowMapFormat = pipeline.supportsR32FloatTexture(ppl.device) ? Format.R32F : Format.RGBA8;
        configs.shadowMapSize.set(shadowInfo.size);
        configs.usePlanarShadow = shadowInfo.enabled && shadowInfo.type === renderer.scene.ShadowType.Planar;
        // Device
        configs.screenSpaceSignY = ppl.device.capabilities.screenSpaceSignY;
        configs.supportDepthSample = (ppl.device.getFormatFeatures(Format.DEPTH_STENCIL) & sampleFeature) === sampleFeature;
        // Constants
        var screenSpaceSignY = device.capabilities.screenSpaceSignY;
        configs.platform.x = configs.isMobile ? 1.0 : 0.0;
        configs.platform.w = screenSpaceSignY * 0.5 + 0.5 << 1 | device.capabilities.clipSpaceSignY * 0.5 + 0.5;
      }
      var defaultSettings = makePipelineSettings();
      var CameraConfigs = function CameraConfigs() {
        this.colorName = '';
        this.depthStencilName = '';
        this.enableMainLightShadowMap = false;
        this.enableMainLightPlanarShadowMap = false;
        this.enablePostProcess = false;
        this.enableProfiler = false;
        this.enableShadingScale = false;
        this.enableMSAA = false;
        this.enableDOF = false;
        this.enableBloom = false;
        this.enableColorGrading = false;
        this.enableFXAA = false;
        this.enableFSR = false;
        this.enableHDR = false;
        this.enablePlanarReflectionProbe = false;
        this.useFullPipeline = false;
        this.singleForwardRadiancePass = false;
        this.radianceFormat = gfx.Format.RGBA8;
        this.shadingScale = 0.5;
        this.settings = defaultSettings;
      };
      function setupPostProcessConfigs(pipelineConfigs, settings, cameraConfigs) {
        cameraConfigs.enableDOF = pipelineConfigs.supportDepthSample && settings.depthOfField.enabled && !!settings.depthOfField.material;
        cameraConfigs.enableBloom = settings.bloom.enabled && !!settings.bloom.material;
        cameraConfigs.enableColorGrading = settings.colorGrading.enabled && !!settings.colorGrading.material && !!settings.colorGrading.colorGradingMap;
        cameraConfigs.enableFXAA = settings.fxaa.enabled && !!settings.fxaa.material;
        cameraConfigs.enablePostProcess = cameraConfigs.enableDOF || cameraConfigs.enableBloom || cameraConfigs.enableColorGrading || cameraConfigs.enableFXAA;
      }
      function setupCameraConfigs(camera, pipelineConfigs, cameraConfigs) {
        var window = camera.window;
        var isMainGameWindow = camera.cameraUsage === CameraUsage.GAME && !!window.swapchain;
        var isEditorView = camera.cameraUsage === CameraUsage.SCENE_VIEW || camera.cameraUsage === CameraUsage.PREVIEW;
        cameraConfigs.colorName = window.colorName;
        cameraConfigs.depthStencilName = window.depthStencilName;
        cameraConfigs.useFullPipeline = (camera.visibility & Layers.Enum.DEFAULT) !== 0;
        cameraConfigs.enableMainLightShadowMap = pipelineConfigs.shadowEnabled && !pipelineConfigs.usePlanarShadow && !!camera.scene && !!camera.scene.mainLight && camera.scene.mainLight.shadowEnabled;
        cameraConfigs.enableMainLightPlanarShadowMap = pipelineConfigs.shadowEnabled && pipelineConfigs.usePlanarShadow && !!camera.scene && !!camera.scene.mainLight && camera.scene.mainLight.shadowEnabled;
        cameraConfigs.enablePlanarReflectionProbe = isMainGameWindow || camera.cameraUsage === CameraUsage.SCENE_VIEW;
        cameraConfigs.enableProfiler = isMainGameWindow;
        cameraConfigs.settings = camera.pipelineSettings ? camera.pipelineSettings : defaultSettings;
        setupPostProcessConfigs(pipelineConfigs, cameraConfigs.settings, cameraConfigs);
        if (isEditorView) {
          var editorSettings = rendering.getEditorPipelineSettings();
          if (editorSettings) {
            cameraConfigs.settings = editorSettings;
            setupPostProcessConfigs(pipelineConfigs, cameraConfigs.settings, cameraConfigs);
          }
        }

        // MSAA
        cameraConfigs.enableMSAA = cameraConfigs.settings.msaa.enabled && !pipelineConfigs.isWeb // TODO(zhouzhenglong): remove this constraint
        && !pipelineConfigs.isWebGL1;

        // Shading scale
        cameraConfigs.shadingScale = cameraConfigs.settings.shadingScale;
        cameraConfigs.enableShadingScale = cameraConfigs.settings.enableShadingScale && cameraConfigs.shadingScale !== 1.0;

        // FSR (Depend on Shading scale)
        cameraConfigs.enableFSR = cameraConfigs.settings.fsr.enabled && !!cameraConfigs.settings.fsr.material && cameraConfigs.enableShadingScale && cameraConfigs.shadingScale < 1.0;

        // Forward rendering (Depend on MSAA and TBR)
        cameraConfigs.singleForwardRadiancePass = pipelineConfigs.isMobile || cameraConfigs.enableMSAA;
        cameraConfigs.enableHDR = cameraConfigs.useFullPipeline && pipelineConfigs.useFloatOutput;
        cameraConfigs.radianceFormat = cameraConfigs.enableHDR ? gfx.Format.RGBA16F : gfx.Format.RGBA8;
      }
      if (rendering) {
        var QueueHint = rendering.QueueHint,
          SceneFlags = rendering.SceneFlags,
          ResourceFlags = rendering.ResourceFlags,
          ResourceResidency = rendering.ResourceResidency;
        var ForwardLighting = /*#__PURE__*/function () {
          function ForwardLighting() {
            // Active lights
            this.lights = [];
            // Active spot lights with shadows (Mutually exclusive with `lights`)
            this.shadowEnabledSpotLights = [];
            // Internal cached resources
            this._sphere = Sphere.create(0, 0, 0, 1);
            this._boundingBox = new AABB();
            this._rangedDirLightBoundingBox = new AABB(0.0, 0.0, 0.0, 0.5, 0.5, 0.5);
          }
          var _proto = ForwardLighting.prototype;
          // ----------------------------------------------------------------
          // Interface
          // ----------------------------------------------------------------
          _proto.cullLights = function cullLights(scene, frustum, cameraPos) {
            // TODO(zhouzhenglong): Make light culling native
            this.lights.length = 0;
            this.shadowEnabledSpotLights.length = 0;
            // spot lights
            for (var _iterator = _createForOfIteratorHelperLoose(scene.spotLights), _step; !(_step = _iterator()).done;) {
              var light = _step.value;
              if (light.baked) {
                continue;
              }
              Sphere.set(this._sphere, light.position.x, light.position.y, light.position.z, light.range);
              if (intersect.sphereFrustum(this._sphere, frustum)) {
                if (light.shadowEnabled) {
                  this.shadowEnabledSpotLights.push(light);
                } else {
                  this.lights.push(light);
                }
              }
            }
            // sphere lights
            for (var _iterator2 = _createForOfIteratorHelperLoose(scene.sphereLights), _step2; !(_step2 = _iterator2()).done;) {
              var _light = _step2.value;
              if (_light.baked) {
                continue;
              }
              Sphere.set(this._sphere, _light.position.x, _light.position.y, _light.position.z, _light.range);
              if (intersect.sphereFrustum(this._sphere, frustum)) {
                this.lights.push(_light);
              }
            }
            // point lights
            for (var _iterator3 = _createForOfIteratorHelperLoose(scene.pointLights), _step3; !(_step3 = _iterator3()).done;) {
              var _light2 = _step3.value;
              if (_light2.baked) {
                continue;
              }
              Sphere.set(this._sphere, _light2.position.x, _light2.position.y, _light2.position.z, _light2.range);
              if (intersect.sphereFrustum(this._sphere, frustum)) {
                this.lights.push(_light2);
              }
            }
            // ranged dir lights
            for (var _iterator4 = _createForOfIteratorHelperLoose(scene.rangedDirLights), _step4; !(_step4 = _iterator4()).done;) {
              var _light3 = _step4.value;
              AABB.transform(this._boundingBox, this._rangedDirLightBoundingBox, _light3.node.getWorldMatrix());
              if (intersect.aabbFrustum(this._boundingBox, frustum)) {
                this.lights.push(_light3);
              }
            }
            if (cameraPos) {
              this.shadowEnabledSpotLights.sort(function (lhs, rhs) {
                return Vec3.squaredDistance(cameraPos, lhs.position) - Vec3.squaredDistance(cameraPos, rhs.position);
              });
            }
          };
          _proto._addLightQueues = function _addLightQueues(camera, pass) {
            for (var _iterator5 = _createForOfIteratorHelperLoose(this.lights), _step5; !(_step5 = _iterator5()).done;) {
              var light = _step5.value;
              var queue = pass.addQueue(QueueHint.BLEND, 'forward-add');
              switch (light.type) {
                case LightType.SPHERE:
                  queue.name = 'sphere-light';
                  break;
                case LightType.SPOT:
                  queue.name = 'spot-light';
                  break;
                case LightType.POINT:
                  queue.name = 'point-light';
                  break;
                case LightType.RANGED_DIRECTIONAL:
                  queue.name = 'ranged-directional-light';
                  break;
                default:
                  queue.name = 'unknown-light';
              }
              queue.addScene(camera, SceneFlags.BLEND, light);
            }
          };
          _proto.addSpotlightShadowPasses = function addSpotlightShadowPasses(ppl, camera, maxNumShadowMaps) {
            var i = 0;
            for (var _iterator6 = _createForOfIteratorHelperLoose(this.shadowEnabledSpotLights), _step6; !(_step6 = _iterator6()).done;) {
              var light = _step6.value;
              var shadowMapSize = ppl.pipelineSceneData.shadows.size;
              var shadowPass = ppl.addRenderPass(shadowMapSize.x, shadowMapSize.y, 'default');
              shadowPass.name = "SpotLightShadowPass" + i;
              shadowPass.addRenderTarget("SpotShadowMap" + i, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
              shadowPass.addDepthStencil("SpotShadowDepth" + i, LoadOp.CLEAR, StoreOp.DISCARD);
              shadowPass.addQueue(QueueHint.NONE, 'shadow-caster').addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light);
              ++i;
              if (i >= maxNumShadowMaps) {
                break;
              }
            }
          };
          _proto.addLightQueues = function addLightQueues(pass, camera, maxNumShadowMaps) {
            this._addLightQueues(camera, pass);
            var i = 0;
            for (var _iterator7 = _createForOfIteratorHelperLoose(this.shadowEnabledSpotLights), _step7; !(_step7 = _iterator7()).done;) {
              var light = _step7.value;
              // Add spot-light pass
              // Save last RenderPass to the `pass` variable
              // TODO(zhouzhenglong): Fix per queue addTexture
              pass.addTexture("SpotShadowMap" + i, 'cc_spotShadowMap');
              var queue = pass.addQueue(QueueHint.BLEND, 'forward-add');
              queue.addScene(camera, SceneFlags.BLEND, light);
              ++i;
              if (i >= maxNumShadowMaps) {
                break;
              }
            }
          }

          // Notice: ForwardLighting cannot handle a lot of lights.
          // If there are too many lights, the performance will be very poor.
          // If many lights are needed, please implement a forward+ or deferred rendering pipeline.
          ;

          _proto.addLightPasses = function addLightPasses(colorName, depthStencilName, depthStencilStoreOp, id,
          // window id
          width, height, camera, viewport, ppl, pass) {
            this._addLightQueues(camera, pass);
            var count = 0;
            var shadowMapSize = ppl.pipelineSceneData.shadows.size;
            for (var _iterator8 = _createForOfIteratorHelperLoose(this.shadowEnabledSpotLights), _step8; !(_step8 = _iterator8()).done;) {
              var light = _step8.value;
              var shadowPass = ppl.addRenderPass(shadowMapSize.x, shadowMapSize.y, 'default');
              shadowPass.name = 'SpotlightShadowPass';
              // Reuse csm shadow map
              shadowPass.addRenderTarget("ShadowMap" + id, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
              shadowPass.addDepthStencil("ShadowDepth" + id, LoadOp.CLEAR, StoreOp.DISCARD);
              shadowPass.addQueue(QueueHint.NONE, 'shadow-caster').addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light);

              // Add spot-light pass
              // Save last RenderPass to the `pass` variable
              ++count;
              var storeOp = count === this.shadowEnabledSpotLights.length ? depthStencilStoreOp : StoreOp.STORE;
              pass = ppl.addRenderPass(width, height, 'default');
              pass.name = 'SpotlightWithShadowMap';
              pass.setViewport(viewport);
              pass.addRenderTarget(colorName, LoadOp.LOAD);
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, storeOp);
              pass.addTexture("ShadowMap" + id, 'cc_spotShadowMap');
              var queue = pass.addQueue(QueueHint.BLEND, 'forward-add');
              queue.addScene(camera, SceneFlags.BLEND, light);
            }
            return pass;
          };
          _proto.isMultipleLightPassesNeeded = function isMultipleLightPassesNeeded() {
            return this.shadowEnabledSpotLights.length > 0;
          };
          return ForwardLighting;
        }();
        var BuiltinPipelineBuilder = /*#__PURE__*/function () {
          function BuiltinPipelineBuilder() {
            this._pipelineEvent = cclegacy.director.root.pipelineEvent;
            // Internal cached resources
            this._clearColor = new Color(0, 0, 0, 1);
            this._clearColorTransparentBlack = new Color(0, 0, 0, 0);
            this._reflectionProbeClearColor = new Vec3(0, 0, 0);
            this._viewport = new Viewport();
            this._configs = new PipelineConfigs();
            this._cameraConfigs = new CameraConfigs();
            // DepthOfField
            this._cocParams = new Vec4(0, 0, 0, 0);
            this._cocTexSize = new Vec4(0, 0, 0, 0);
            // Bloom
            this._bloomParams = new Vec4(0, 0, 0, 0);
            this._bloomTexSize = new Vec4(0, 0, 0, 0);
            this._bloomWidths = [];
            this._bloomHeights = [];
            this._bloomTexNames = [];
            // Color Grading
            this._colorGradingTexSize = new Vec2(0, 0);
            // FXAA
            this._fxaaParams = new Vec4(0, 0, 0, 0);
            // FSR
            this._fsrParams = new Vec4(0, 0, 0, 0);
            this._fsrTexSize = new Vec4(0, 0, 0, 0);
            // Materials
            this._copyAndTonemapMaterial = new Material();
            // Internal States
            this._initialized = false;
            // TODO(zhouzhenglong): Make default effect asset loading earlier and remove this flag
            // Forward lighting
            this.forwardLighting = new ForwardLighting();
          }
          var _proto2 = BuiltinPipelineBuilder.prototype;
          // ----------------------------------------------------------------
          // Interface
          // ----------------------------------------------------------------
          _proto2.windowResize = function windowResize(ppl, window, camera, nativeWidth, nativeHeight) {
            setupPipelineConfigs(ppl, this._configs);
            setupCameraConfigs(camera, this._configs, this._cameraConfigs);
            var settings = this._cameraConfigs.settings;
            var id = window.renderWindowId;
            var width = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeWidth * this._cameraConfigs.shadingScale), 1) : nativeWidth;
            var height = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeHeight * this._cameraConfigs.shadingScale), 1) : nativeHeight;

            // Render Window (UI)
            ppl.addRenderWindow(this._cameraConfigs.colorName, Format.RGBA8, nativeWidth, nativeHeight, window, this._cameraConfigs.depthStencilName);
            if (this._cameraConfigs.enableShadingScale) {
              ppl.addDepthStencil("ScaledSceneDepth" + id, Format.DEPTH_STENCIL, width, height);
              ppl.addRenderTarget("ScaledRadiance" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("ScaledLdrColor" + id, Format.RGBA8, width, height);
            } else {
              ppl.addDepthStencil("SceneDepth" + id, Format.DEPTH_STENCIL, width, height);
              ppl.addRenderTarget("Radiance" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("LdrColor" + id, Format.RGBA8, width, height);
            }
            if (this._cameraConfigs.enableFSR) {
              ppl.addRenderTarget("FsrColor" + id, Format.RGBA8, nativeWidth, nativeHeight);
            }

            // MsaaRadiance
            if (this._cameraConfigs.enableMSAA) {
              // Notice: We never store multisample results.
              // These samples are always resolved and discarded at the end of the render pass.
              // So the ResourceResidency should be MEMORYLESS.
              if (this._cameraConfigs.enableHDR) {
                ppl.addTexture("MsaaRadiance" + id, TextureType.TEX2D, this._cameraConfigs.radianceFormat, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.COLOR_ATTACHMENT, ResourceResidency.MEMORYLESS);
              } else {
                ppl.addTexture("MsaaRadiance" + id, TextureType.TEX2D, Format.RGBA8, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.COLOR_ATTACHMENT, ResourceResidency.MEMORYLESS);
              }
              ppl.addTexture("MsaaDepthStencil" + id, TextureType.TEX2D, Format.DEPTH_STENCIL, width, height, 1, 1, 1, settings.msaa.sampleCount, ResourceFlags.DEPTH_STENCIL_ATTACHMENT, ResourceResidency.MEMORYLESS);
            }

            // Mainlight ShadowMap
            ppl.addRenderTarget("ShadowMap" + id, this._configs.shadowMapFormat, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
            ppl.addDepthStencil("ShadowDepth" + id, Format.DEPTH_STENCIL, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);

            // Spot-light shadow maps
            if (this._cameraConfigs.singleForwardRadiancePass) {
              var count = this._configs.mobileMaxSpotLightShadowMaps;
              for (var i = 0; i !== count; ++i) {
                ppl.addRenderTarget("SpotShadowMap" + i, this._configs.shadowMapFormat, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
                ppl.addDepthStencil("SpotShadowDepth" + i, Format.DEPTH_STENCIL, this._configs.shadowMapSize.x, this._configs.shadowMapSize.y);
              }
            }

            // ---------------------------------------------------------
            // Post Process
            // ---------------------------------------------------------
            // DepthOfField
            if (this._cameraConfigs.enableDOF) {
              var halfWidth = Math.max(Math.floor(width / 2), 1);
              var halfHeight = Math.max(Math.floor(height / 2), 1);
              // `DofCoc${id}` texture will reuse ldrColorName
              ppl.addRenderTarget("DofRadiance" + id, this._cameraConfigs.radianceFormat, width, height);
              ppl.addRenderTarget("DofPrefilter" + id, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
              ppl.addRenderTarget("DofBokeh" + id, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
              ppl.addRenderTarget("DofFilter" + id, this._cameraConfigs.radianceFormat, halfWidth, halfHeight);
            }
            // Bloom (Kawase Dual Filter)
            if (this._cameraConfigs.enableBloom) {
              var bloomWidth = width;
              var bloomHeight = height;
              for (var _i = 0; _i !== settings.bloom.iterations + 1; ++_i) {
                bloomWidth = Math.max(Math.floor(bloomWidth / 2), 1);
                bloomHeight = Math.max(Math.floor(bloomHeight / 2), 1);
                ppl.addRenderTarget("BloomTex" + id + "_" + _i, this._cameraConfigs.radianceFormat, bloomWidth, bloomHeight);
              }
            }
            // Color Grading
            if (this._cameraConfigs.enableColorGrading && settings.colorGrading.material && settings.colorGrading.colorGradingMap) {
              settings.colorGrading.material.setProperty('colorGradingMap', settings.colorGrading.colorGradingMap);
            }
            // FXAA
            if (this._cameraConfigs.enableFXAA && this._cameraConfigs.enableShadingScale) {
              ppl.addRenderTarget("AaColor" + id, Format.RGBA8, width, height);
            }
          };
          _proto2.setup = function setup(cameras, ppl) {
            // TODO(zhouzhenglong): Make default effect asset loading earlier and remove _initMaterials
            if (this._initMaterials(ppl)) {
              return;
            }
            // Render cameras
            // log(`==================== One Frame ====================`);
            for (var _iterator9 = _createForOfIteratorHelperLoose(cameras), _step9; !(_step9 = _iterator9()).done;) {
              var camera = _step9.value;
              // Skip invalid camera
              if (!camera.scene || !camera.window) {
                continue;
              }
              // Setup camera configs
              setupCameraConfigs(camera, this._configs, this._cameraConfigs);
              // log(`Setup camera: ${camera.node!.name}, window: ${camera.window.renderWindowId}, isFull: ${this._cameraConfigs.useFullPipeline}, `
              //     + `size: ${camera.window.width}x${camera.window.height}`);

              this._pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_BEGIN, camera);

              // Build pipeline
              if (this._cameraConfigs.useFullPipeline) {
                this._buildForwardPipeline(ppl, camera, camera.scene);
              } else {
                this._buildSimplePipeline(ppl, camera);
              }
              this._pipelineEvent.emit(PipelineEventType.RENDER_CAMERA_END, camera);
            }
          }

          // ----------------------------------------------------------------
          // Pipelines
          // ----------------------------------------------------------------
          ;

          _proto2._buildSimplePipeline = function _buildSimplePipeline(ppl, camera) {
            var width = Math.max(Math.floor(camera.window.width), 1);
            var height = Math.max(Math.floor(camera.window.height), 1);
            var colorName = this._cameraConfigs.colorName;
            var depthStencilName = this._cameraConfigs.depthStencilName;
            var viewport = camera.viewport; // Reduce C++/TS interop
            this._viewport.left = Math.round(viewport.x * width);
            this._viewport.top = Math.round(viewport.y * height);
            // Here we must use camera.viewport.width instead of camera.viewport.z, which
            // is undefined on native platform. The same as camera.viewport.height.
            this._viewport.width = Math.max(Math.round(viewport.width * width), 1);
            this._viewport.height = Math.max(Math.round(viewport.height * height), 1);
            var clearColor = camera.clearColor; // Reduce C++/TS interop
            this._clearColor.x = clearColor.x;
            this._clearColor.y = clearColor.y;
            this._clearColor.z = clearColor.z;
            this._clearColor.w = clearColor.w;
            var pass = ppl.addRenderPass(width, height, 'default');

            // bind output render target
            if (forwardNeedClearColor(camera)) {
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, StoreOp.STORE);
            }

            // bind depth stencil buffer
            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, StoreOp.DISCARD);
            }
            pass.setViewport(this._viewport);

            // The opaque queue is used for Reflection probe preview
            pass.addQueue(QueueHint.OPAQUE).addScene(camera, SceneFlags.OPAQUE);

            // The blend queue is used for UI and Gizmos
            var flags = SceneFlags.BLEND | SceneFlags.UI;
            if (this._cameraConfigs.enableProfiler) {
              flags |= SceneFlags.PROFILER;
              pass.showStatistics = true;
            }
            pass.addQueue(QueueHint.BLEND).addScene(camera, flags);
          };
          _proto2._buildForwardPipeline = function _buildForwardPipeline(ppl, camera, scene) {
            // Init
            var settings = this._cameraConfigs.settings;
            var nativeWidth = Math.max(Math.floor(camera.window.width), 1);
            var nativeHeight = Math.max(Math.floor(camera.window.height), 1);
            var width = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeWidth * this._cameraConfigs.shadingScale), 1) : nativeWidth;
            var height = this._cameraConfigs.enableShadingScale ? Math.max(Math.floor(nativeHeight * this._cameraConfigs.shadingScale), 1) : nativeHeight;
            var id = camera.window.renderWindowId;
            var colorName = this._cameraConfigs.colorName;
            var sceneDepth = this._cameraConfigs.enableShadingScale ? "ScaledSceneDepth" + id : "SceneDepth" + id;
            var radianceName = this._cameraConfigs.enableShadingScale ? "ScaledRadiance" + id : "Radiance" + id;
            var ldrColorName = this._cameraConfigs.enableShadingScale ? "ScaledLdrColor" + id : "LdrColor" + id;
            var mainLight = scene.mainLight;

            // Forward Lighting (Light Culling)
            this.forwardLighting.cullLights(scene, camera.frustum);

            // Main Directional light CSM Shadow Map
            if (this._cameraConfigs.enableMainLightShadowMap) {
              assert(!!mainLight);
              this._addCascadedShadowMapPass(ppl, id, mainLight, camera);
            }

            // Spot light shadow maps (Mobile or MSAA)
            if (this._cameraConfigs.singleForwardRadiancePass) {
              // Currently, only support 1 spot light with shadow map on mobile platform.
              // TODO(zhouzhenglong): Relex this limitation.
              this.forwardLighting.addSpotlightShadowPasses(ppl, camera, this._configs.mobileMaxSpotLightShadowMaps);
            }
            this._tryAddReflectionProbePasses(ppl, id, mainLight, camera.scene);

            // Forward Lighting
            var lastPass;
            if (this._cameraConfigs.enablePostProcess) {
              // Post Process
              // Radiance and DoF
              if (this._cameraConfigs.enableDOF) {
                assert(!!settings.depthOfField.material);
                var dofRadianceName = "DofRadiance" + id;
                // Disable MSAA, depth stencil cannot be resolved cross-platformly
                this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, dofRadianceName, sceneDepth, true, StoreOp.STORE);
                this._addDepthOfFieldPasses(ppl, settings, settings.depthOfField.material, id, camera, width, height, dofRadianceName, sceneDepth, radianceName, ldrColorName);
              } else {
                this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, radianceName, sceneDepth);
              }
              // Bloom
              if (this._cameraConfigs.enableBloom) {
                assert(!!settings.bloom.material);
                this._addKawaseDualFilterBloomPasses(ppl, settings, settings.bloom.material, id, width, height, radianceName);
              }
              // Tone Mapping and FXAA
              if (this._cameraConfigs.enableFXAA) {
                assert(!!settings.fxaa.material);
                var copyAndTonemapPassNeeded = this._cameraConfigs.enableHDR || this._cameraConfigs.enableColorGrading;
                var ldrColorBufferName = copyAndTonemapPassNeeded ? ldrColorName : radianceName;
                // FXAA is applied after tone mapping
                if (copyAndTonemapPassNeeded) {
                  this._addCopyAndTonemapPass(ppl, settings, width, height, radianceName, ldrColorBufferName);
                }
                // Apply FXAA
                if (this._cameraConfigs.enableShadingScale) {
                  var aaColorName = "AaColor" + id;
                  // Apply FXAA on scaled image
                  this._addFxaaPass(ppl, settings.fxaa.material, width, height, ldrColorBufferName, aaColorName);
                  // Copy FXAA result to screen
                  if (this._cameraConfigs.enableFSR && settings.fsr.material) {
                    // Apply FSR
                    lastPass = this._addFsrPass(ppl, settings, settings.fsr.material, id, width, height, aaColorName, nativeWidth, nativeHeight, colorName);
                  } else {
                    // Scale FXAA result to screen
                    lastPass = this._addCopyPass(ppl, nativeWidth, nativeHeight, aaColorName, colorName);
                  }
                } else {
                  // Image not scaled, output FXAA result to screen directly
                  lastPass = this._addFxaaPass(ppl, settings.fxaa.material, nativeWidth, nativeHeight, ldrColorBufferName, colorName);
                }
              } else {
                // No FXAA (Size might be scaled)
                lastPass = this._addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName);
              }
            } else if (this._cameraConfigs.enableHDR || this._cameraConfigs.enableShadingScale) {
              // HDR or Scaled LDR
              this._addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, radianceName, sceneDepth);
              lastPass = this._addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName);
            } else {
              // LDR (Size is not scaled)
              lastPass = this._addForwardRadiancePasses(ppl, id, camera, nativeWidth, nativeHeight, mainLight, colorName, this._cameraConfigs.depthStencilName);
            }

            // UI size is not scaled, does not have AA
            this._addUIQueue(camera, lastPass);
          }

          // ----------------------------------------------------------------
          // Common Passes
          // ----------------------------------------------------------------
          ;

          _proto2._addTonemapResizeOrSuperResolutionPasses = function _addTonemapResizeOrSuperResolutionPasses(ppl, settings, id, width, height, radianceName, ldrColorName, nativeWidth, nativeHeight, colorName) {
            var lastPass;
            if (this._cameraConfigs.enableFSR && settings.fsr.material) {
              // Apply FSR
              this._addCopyAndTonemapPass(ppl, settings, width, height, radianceName, ldrColorName);
              lastPass = this._addFsrPass(ppl, settings, settings.fsr.material, id, width, height, ldrColorName, nativeWidth, nativeHeight, colorName);
            } else {
              // Output HDR/LDR result to screen directly (Size might be scaled)
              lastPass = this._addCopyAndTonemapPass(ppl, settings, nativeWidth, nativeHeight, radianceName, colorName);
            }
            return lastPass;
          };
          _proto2._addCascadedShadowMapPass = function _addCascadedShadowMapPass(ppl, id, light, camera) {
            // ----------------------------------------------------------------
            // Dynamic states
            // ----------------------------------------------------------------
            var width = ppl.pipelineSceneData.shadows.size.x;
            var height = ppl.pipelineSceneData.shadows.size.y;
            this._viewport.left = 0;
            this._viewport.top = 0;
            this._viewport.width = width;
            this._viewport.height = height;

            // ----------------------------------------------------------------
            // CSM Shadow Map
            // ----------------------------------------------------------------
            var pass = ppl.addRenderPass(width, height, 'default');
            pass.name = 'CascadedShadowMap';
            pass.addRenderTarget("ShadowMap" + id, LoadOp.CLEAR, StoreOp.STORE, new Color(1, 1, 1, 1));
            pass.addDepthStencil("ShadowDepth" + id, LoadOp.CLEAR, StoreOp.DISCARD);
            var csmLevel = ppl.pipelineSceneData.csmSupported ? light.csmLevel : 1;

            // Add shadow map viewports
            for (var level = 0; level !== csmLevel; ++level) {
              getCsmMainLightViewport(light, width, height, level, this._viewport, this._configs.screenSpaceSignY);
              var queue = pass.addQueue(QueueHint.NONE, 'shadow-caster');
              if (!this._configs.isWebGPU) {
                // Temporary workaround for WebGPU
                queue.setViewport(this._viewport);
              }
              queue.addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.SHADOW_CASTER).useLightFrustum(light, level);
            }
          };
          _proto2._addCopyPass = function _addCopyPass(ppl, width, height, input, output) {
            var pass = ppl.addRenderPass(width, height, 'cc-tone-mapping');
            pass.addRenderTarget(output, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            pass.addTexture(input, 'inputTexture');
            pass.setVec4('g_platform', this._configs.platform);
            pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(this._copyAndTonemapMaterial, 1);
            return pass;
          };
          _proto2._addCopyAndTonemapPass = function _addCopyAndTonemapPass(ppl, settings, width, height, radianceName, colorName) {
            var pass;
            if (this._cameraConfigs.enableColorGrading && settings.colorGrading.material && settings.colorGrading.colorGradingMap) {
              var lutTex = settings.colorGrading.colorGradingMap;
              this._colorGradingTexSize.x = lutTex.width;
              this._colorGradingTexSize.y = lutTex.height;
              var isSquareMap = lutTex.width === lutTex.height;
              if (isSquareMap) {
                pass = ppl.addRenderPass(width, height, 'cc-color-grading-8x8');
              } else {
                pass = ppl.addRenderPass(width, height, 'cc-color-grading-nx1');
              }
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              pass.addTexture(radianceName, 'sceneColorMap');
              pass.setVec4('g_platform', this._configs.platform);
              pass.setVec2('lutTextureSize', this._colorGradingTexSize);
              pass.setFloat('contribute', settings.colorGrading.contribute);
              pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(settings.colorGrading.material, isSquareMap ? 1 : 0);
            } else {
              pass = ppl.addRenderPass(width, height, 'cc-tone-mapping');
              pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              pass.addTexture(radianceName, 'inputTexture');
              pass.setVec4('g_platform', this._configs.platform);
              if (settings.toneMapping.material) {
                pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(settings.toneMapping.material, 0);
              } else {
                pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(this._copyAndTonemapMaterial, 0);
              }
            }
            return pass;
          };
          _proto2._buildForwardMainLightPass = function _buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, depthStencilStoreOp, mainLight, scene) {
            if (scene === void 0) {
              scene = null;
            }
            // set viewport
            pass.setViewport(this._viewport);
            var colorStoreOp = this._cameraConfigs.enableMSAA ? StoreOp.DISCARD : StoreOp.STORE;

            // bind output render target
            if (forwardNeedClearColor(camera)) {
              pass.addRenderTarget(colorName, LoadOp.CLEAR, colorStoreOp, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, colorStoreOp);
            }

            // bind depth stencil buffer
            {
              if (colorName === this._cameraConfigs.colorName && depthStencilName !== this._cameraConfigs.depthStencilName) {
                warn('Default framebuffer cannot use custom depth stencil buffer');
              }
            }
            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, depthStencilStoreOp, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, depthStencilStoreOp);
            }

            // Set shadow map if enabled
            if (this._cameraConfigs.enableMainLightShadowMap) {
              pass.addTexture("ShadowMap" + id, 'cc_shadowMap');
            }

            // TODO(zhouzhenglong): Separate OPAQUE and MASK queue

            // add opaque and mask queue
            pass.addQueue(QueueHint.NONE) // Currently we put OPAQUE and MASK into one queue, so QueueHint is NONE
            .addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK, mainLight || undefined, scene ? scene : undefined);
          };
          _proto2._addDepthOfFieldPasses = function _addDepthOfFieldPasses(ppl, settings, dofMaterial, id, camera, width, height, dofRadianceName, depthStencil, radianceName, ldrColorName) {
            // https://catlikecoding.com/unity/tutorials/advanced-rendering/depth-of-field/

            this._cocParams.x = settings.depthOfField.focusDistance;
            this._cocParams.y = settings.depthOfField.focusRange;
            this._cocParams.z = settings.depthOfField.bokehRadius;
            this._cocParams.w = 0.0;
            this._cocTexSize.x = 1.0 / width;
            this._cocTexSize.y = 1.0 / height;
            this._cocTexSize.z = width;
            this._cocTexSize.w = height;
            var halfWidth = Math.max(Math.floor(width / 2), 1);
            var halfHeight = Math.max(Math.floor(height / 2), 1);
            var cocName = ldrColorName;
            var prefilterName = "DofPrefilter" + id;
            var bokehName = "DofBokeh" + id;
            var filterName = "DofFilter" + id;

            // CoC
            var cocPass = ppl.addRenderPass(width, height, 'cc-dof-coc');
            cocPass.addRenderTarget(cocName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            cocPass.addTexture(depthStencil, 'DepthTex');
            cocPass.setVec4('g_platform', this._configs.platform);
            cocPass.setMat4('proj', camera.matProj);
            cocPass.setVec4('cocParams', this._cocParams);
            cocPass.addQueue(QueueHint.OPAQUE).addCameraQuad(camera, dofMaterial, 0); // addCameraQuad will set camera related UBOs

            // Downsample and Prefilter
            var prefilterPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-prefilter');
            prefilterPass.addRenderTarget(prefilterName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            prefilterPass.addTexture(dofRadianceName, 'colorTex');
            prefilterPass.addTexture(cocName, 'cocTex');
            prefilterPass.setVec4('g_platform', this._configs.platform);
            prefilterPass.setVec4('mainTexTexelSize', this._cocTexSize);
            prefilterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 1);

            // Bokeh blur
            var bokehPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-bokeh');
            bokehPass.addRenderTarget(bokehName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            bokehPass.addTexture(prefilterName, 'prefilterTex');
            bokehPass.setVec4('g_platform', this._configs.platform);
            bokehPass.setVec4('mainTexTexelSize', this._cocTexSize);
            bokehPass.setVec4('cocParams', this._cocParams);
            bokehPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 2);

            // Filtering
            var filterPass = ppl.addRenderPass(halfWidth, halfHeight, 'cc-dof-filter');
            filterPass.addRenderTarget(filterName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            filterPass.addTexture(bokehName, 'bokehTex');
            filterPass.setVec4('g_platform', this._configs.platform);
            filterPass.setVec4('mainTexTexelSize', this._cocTexSize);
            filterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 3);

            // Combine
            var combinePass = ppl.addRenderPass(width, height, 'cc-dof-combine');
            combinePass.addRenderTarget(radianceName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            combinePass.addTexture(dofRadianceName, 'colorTex');
            combinePass.addTexture(cocName, 'cocTex');
            combinePass.addTexture(filterName, 'filterTex');
            combinePass.setVec4('g_platform', this._configs.platform);
            combinePass.setVec4('cocParams', this._cocParams);
            combinePass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(dofMaterial, 4);
          };
          _proto2._addKawaseDualFilterBloomPasses = function _addKawaseDualFilterBloomPasses(ppl, settings, bloomMaterial, id, width, height, radianceName) {
            // Based on Kawase Dual Filter Blur. Saves bandwidth on mobile devices.
            // eslint-disable-next-line max-len
            // https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-20-66/siggraph2015_2D00_mmg_2D00_marius_2D00_slides.pdf

            // Size: [prefilter(1/2), downsample(1/4), downsample(1/8), downsample(1/16), ...]
            var iterations = settings.bloom.iterations;
            var sizeCount = iterations + 1;
            this._bloomWidths.length = sizeCount;
            this._bloomHeights.length = sizeCount;
            this._bloomWidths[0] = Math.max(Math.floor(width / 2), 1);
            this._bloomHeights[0] = Math.max(Math.floor(height / 2), 1);
            for (var i = 1; i !== sizeCount; ++i) {
              this._bloomWidths[i] = Math.max(Math.floor(this._bloomWidths[i - 1] / 2), 1);
              this._bloomHeights[i] = Math.max(Math.floor(this._bloomHeights[i - 1] / 2), 1);
            }

            // Bloom texture names
            this._bloomTexNames.length = sizeCount;
            for (var _i2 = 0; _i2 !== sizeCount; ++_i2) {
              this._bloomTexNames[_i2] = "BloomTex" + id + "_" + _i2;
            }

            // Setup bloom parameters
            this._bloomParams.x = this._configs.useFloatOutput ? 1 : 0;
            this._bloomParams.x = 0; // unused
            this._bloomParams.z = settings.bloom.threshold;
            this._bloomParams.w = settings.bloom.enableAlphaMask ? 1 : 0;

            // Prefilter pass
            var prefilterPass = ppl.addRenderPass(this._bloomWidths[0], this._bloomHeights[0], 'cc-bloom-prefilter');
            prefilterPass.addRenderTarget(this._bloomTexNames[0], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            prefilterPass.addTexture(radianceName, 'inputTexture');
            prefilterPass.setVec4('g_platform', this._configs.platform);
            prefilterPass.setVec4('bloomParams', this._bloomParams);
            prefilterPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 0);

            // Downsample passes
            for (var _i3 = 1; _i3 !== sizeCount; ++_i3) {
              var downPass = ppl.addRenderPass(this._bloomWidths[_i3], this._bloomHeights[_i3], 'cc-bloom-downsample');
              downPass.addRenderTarget(this._bloomTexNames[_i3], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              downPass.addTexture(this._bloomTexNames[_i3 - 1], 'bloomTexture');
              this._bloomTexSize.x = this._bloomWidths[_i3 - 1];
              this._bloomTexSize.y = this._bloomHeights[_i3 - 1];
              downPass.setVec4('g_platform', this._configs.platform);
              downPass.setVec4('bloomTexSize', this._bloomTexSize);
              downPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 1);
            }

            // Upsample passes
            for (var _i4 = iterations; _i4-- > 0;) {
              var upPass = ppl.addRenderPass(this._bloomWidths[_i4], this._bloomHeights[_i4], 'cc-bloom-upsample');
              upPass.addRenderTarget(this._bloomTexNames[_i4], LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
              upPass.addTexture(this._bloomTexNames[_i4 + 1], 'bloomTexture');
              this._bloomTexSize.x = this._bloomWidths[_i4 + 1];
              this._bloomTexSize.y = this._bloomHeights[_i4 + 1];
              upPass.setVec4('g_platform', this._configs.platform);
              upPass.setVec4('bloomTexSize', this._bloomTexSize);
              upPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(bloomMaterial, 2);
            }

            // Combine pass
            var combinePass = ppl.addRenderPass(width, height, 'cc-bloom-combine');
            combinePass.addRenderTarget(radianceName, LoadOp.LOAD, StoreOp.STORE);
            combinePass.addTexture(this._bloomTexNames[0], 'bloomTexture');
            combinePass.setVec4('g_platform', this._configs.platform);
            combinePass.setVec4('bloomParams', this._bloomParams);
            combinePass.addQueue(QueueHint.BLEND).addFullscreenQuad(bloomMaterial, 3);
          };
          _proto2._addFsrPass = function _addFsrPass(ppl, settings, fsrMaterial, id, width, height, ldrColorName, nativeWidth, nativeHeight, colorName) {
            this._fsrTexSize.x = width;
            this._fsrTexSize.y = height;
            this._fsrTexSize.z = nativeWidth;
            this._fsrTexSize.w = nativeHeight;
            this._fsrParams.x = clamp(1.0 - settings.fsr.sharpness, 0.02, 0.98);
            var fsrColorName = "FsrColor" + id;
            var easuPass = ppl.addRenderPass(nativeWidth, nativeHeight, 'cc-fsr-easu');
            easuPass.addRenderTarget(fsrColorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            easuPass.addTexture(ldrColorName, 'outputResultMap');
            easuPass.setVec4('g_platform', this._configs.platform);
            easuPass.setVec4('fsrTexSize', this._fsrTexSize);
            easuPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fsrMaterial, 0);
            var rcasPass = ppl.addRenderPass(nativeWidth, nativeHeight, 'cc-fsr-rcas');
            rcasPass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            rcasPass.addTexture(fsrColorName, 'outputResultMap');
            rcasPass.setVec4('g_platform', this._configs.platform);
            rcasPass.setVec4('fsrTexSize', this._fsrTexSize);
            rcasPass.setVec4('fsrParams', this._fsrParams);
            rcasPass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fsrMaterial, 1);
            return rcasPass;
          };
          _proto2._addFxaaPass = function _addFxaaPass(ppl, fxaaMaterial, width, height, ldrColorName, colorName) {
            this._fxaaParams.x = width;
            this._fxaaParams.y = height;
            this._fxaaParams.z = 1 / width;
            this._fxaaParams.w = 1 / height;
            var pass = ppl.addRenderPass(width, height, 'cc-fxaa');
            pass.addRenderTarget(colorName, LoadOp.CLEAR, StoreOp.STORE, this._clearColorTransparentBlack);
            pass.addTexture(ldrColorName, 'sceneColorMap');
            pass.setVec4('g_platform', this._configs.platform);
            pass.setVec4('texSize', this._fxaaParams);
            pass.addQueue(QueueHint.OPAQUE).addFullscreenQuad(fxaaMaterial, 0);
            return pass;
          };
          _proto2._addUIQueue = function _addUIQueue(camera, pass) {
            var flags = SceneFlags.UI;
            if (this._cameraConfigs.enableProfiler) {
              flags |= SceneFlags.PROFILER;
              pass.showStatistics = true;
            }
            pass.addQueue(QueueHint.BLEND, 'default', 'default').addScene(camera, flags);
          }

          // ----------------------------------------------------------------
          // Forward
          // ----------------------------------------------------------------
          ;

          _proto2._addForwardRadiancePasses = function _addForwardRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, disableMSAA, depthStencilStoreOp) {
            if (disableMSAA === void 0) {
              disableMSAA = false;
            }
            if (depthStencilStoreOp === void 0) {
              depthStencilStoreOp = StoreOp.DISCARD;
            }
            // ----------------------------------------------------------------
            // Dynamic states
            // ----------------------------------------------------------------
            // Prepare camera clear color
            var clearColor = camera.clearColor; // Reduce C++/TS interop
            this._clearColor.x = clearColor.x;
            this._clearColor.y = clearColor.y;
            this._clearColor.z = clearColor.z;
            this._clearColor.w = clearColor.w;

            // Prepare camera viewport
            var viewport = camera.viewport; // Reduce C++/TS interop
            this._viewport.left = Math.round(viewport.x * width);
            this._viewport.top = Math.round(viewport.y * height);
            // Here we must use camera.viewport.width instead of camera.viewport.z, which
            // is undefined on native platform. The same as camera.viewport.height.
            this._viewport.width = Math.max(Math.round(viewport.width * width), 1);
            this._viewport.height = Math.max(Math.round(viewport.height * height), 1);

            // MSAA
            var enableMSAA = !disableMSAA && this._cameraConfigs.enableMSAA;
            assert(!enableMSAA || this._cameraConfigs.singleForwardRadiancePass);

            // ----------------------------------------------------------------
            // Forward Lighting (Main Directional Light)
            // ----------------------------------------------------------------
            var pass = this._cameraConfigs.singleForwardRadiancePass ? this._addForwardSingleRadiancePass(ppl, id, camera, enableMSAA, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) : this._addForwardMultipleRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp);

            // Planar Shadow
            if (this._cameraConfigs.enableMainLightPlanarShadowMap) {
              this.addPlanarShadowQueue(camera, mainLight, pass);
            }

            // ----------------------------------------------------------------
            // Forward Lighting (Blend)
            // ----------------------------------------------------------------
            // Add transparent queue

            var sceneFlags = SceneFlags.BLEND | (camera.geometryRenderer ? SceneFlags.GEOMETRY : SceneFlags.NONE);
            pass.addQueue(QueueHint.BLEND).addScene(camera, sceneFlags, mainLight || undefined);
            return pass;
          };
          _proto2._addForwardSingleRadiancePass = function _addForwardSingleRadiancePass(ppl, id, camera, enableMSAA, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) {
            assert(this._cameraConfigs.singleForwardRadiancePass);
            // ----------------------------------------------------------------
            // Forward Lighting (Main Directional Light)
            // ----------------------------------------------------------------
            var pass;
            if (enableMSAA) {
              var msaaRadianceName = "MsaaRadiance" + id;
              var msaaDepthStencilName = "MsaaDepthStencil" + id;
              var sampleCount = this._cameraConfigs.settings.msaa.sampleCount;
              var msPass = ppl.addMultisampleRenderPass(width, height, sampleCount, 0, 'default');
              msPass.name = 'MsaaForwardPass';

              // MSAA always discards depth stencil
              this._buildForwardMainLightPass(msPass, id, camera, msaaRadianceName, msaaDepthStencilName, StoreOp.DISCARD, mainLight);
              msPass.resolveRenderTarget(msaaRadianceName, colorName);
              pass = msPass;
            } else {
              pass = ppl.addRenderPass(width, height, 'default');
              pass.name = 'ForwardPass';
              this._buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, depthStencilStoreOp, mainLight);
            }
            assert(pass !== undefined);

            // Forward Lighting (Additive Lights)
            this.forwardLighting.addLightQueues(pass, camera, this._configs.mobileMaxSpotLightShadowMaps);
            return pass;
          };
          _proto2.addPlanarShadowQueue = function addPlanarShadowQueue(camera, mainLight, pass) {
            pass.addQueue(QueueHint.BLEND, 'planar-shadow').addScene(camera, SceneFlags.SHADOW_CASTER | SceneFlags.PLANAR_SHADOW | SceneFlags.BLEND, mainLight || undefined);
          };
          _proto2._addForwardMultipleRadiancePasses = function _addForwardMultipleRadiancePasses(ppl, id, camera, width, height, mainLight, colorName, depthStencilName, depthStencilStoreOp) {
            assert(!this._cameraConfigs.singleForwardRadiancePass);

            // Forward Lighting (Main Directional Light)
            var pass = ppl.addRenderPass(width, height, 'default');
            pass.name = 'ForwardPass';
            var firstStoreOp = this.forwardLighting.isMultipleLightPassesNeeded() ? StoreOp.STORE : depthStencilStoreOp;
            this._buildForwardMainLightPass(pass, id, camera, colorName, depthStencilName, firstStoreOp, mainLight);

            // Forward Lighting (Additive Lights)
            pass = this.forwardLighting.addLightPasses(colorName, depthStencilName, depthStencilStoreOp, id, width, height, camera, this._viewport, ppl, pass);
            return pass;
          };
          _proto2._buildReflectionProbePass = function _buildReflectionProbePass(pass, id, camera, colorName, depthStencilName, mainLight, scene) {
            if (scene === void 0) {
              scene = null;
            }
            // set viewport
            var colorStoreOp = this._cameraConfigs.enableMSAA ? StoreOp.DISCARD : StoreOp.STORE;

            // bind output render target
            if (forwardNeedClearColor(camera)) {
              this._reflectionProbeClearColor.x = camera.clearColor.x;
              this._reflectionProbeClearColor.y = camera.clearColor.y;
              this._reflectionProbeClearColor.z = camera.clearColor.z;
              var clearColor = rendering.packRGBE(this._reflectionProbeClearColor);
              this._clearColor.x = clearColor.x;
              this._clearColor.y = clearColor.y;
              this._clearColor.z = clearColor.z;
              this._clearColor.w = clearColor.w;
              pass.addRenderTarget(colorName, LoadOp.CLEAR, colorStoreOp, this._clearColor);
            } else {
              pass.addRenderTarget(colorName, LoadOp.LOAD, colorStoreOp);
            }

            // bind depth stencil buffer
            if (camera.clearFlag & ClearFlagBit.DEPTH_STENCIL) {
              pass.addDepthStencil(depthStencilName, LoadOp.CLEAR, StoreOp.DISCARD, camera.clearDepth, camera.clearStencil, camera.clearFlag & ClearFlagBit.DEPTH_STENCIL);
            } else {
              pass.addDepthStencil(depthStencilName, LoadOp.LOAD, StoreOp.DISCARD);
            }

            // Set shadow map if enabled
            if (this._cameraConfigs.enableMainLightShadowMap) {
              pass.addTexture("ShadowMap" + id, 'cc_shadowMap');
            }

            // TODO(zhouzhenglong): Separate OPAQUE and MASK queue

            // add opaque and mask queue
            pass.addQueue(QueueHint.NONE, 'reflect-map') // Currently we put OPAQUE and MASK into one queue, so QueueHint is NONE
            .addScene(camera, SceneFlags.OPAQUE | SceneFlags.MASK | SceneFlags.REFLECTION_PROBE, mainLight || undefined, scene ? scene : undefined);
          };
          _proto2._tryAddReflectionProbePasses = function _tryAddReflectionProbePasses(ppl, id, mainLight, scene) {
            var reflectionProbeManager = cclegacy.internal.reflectionProbeManager;
            if (!reflectionProbeManager) {
              return;
            }
            var probes = reflectionProbeManager.getProbes();
            var maxProbeCount = 4;
            var probeID = 0;
            for (var _iterator10 = _createForOfIteratorHelperLoose(probes), _step10; !(_step10 = _iterator10()).done;) {
              var probe = _step10.value;
              if (!probe.needRender) {
                continue;
              }
              var area = probe.renderArea();
              var width = Math.max(Math.floor(area.x), 1);
              var height = Math.max(Math.floor(area.y), 1);
              if (probe.probeType === renderer.scene.ProbeType.PLANAR) {
                if (!this._cameraConfigs.enablePlanarReflectionProbe) {
                  continue;
                }
                var window = probe.realtimePlanarTexture.window;
                var colorName = "PlanarProbeRT" + probeID;
                var depthStencilName = "PlanarProbeDS" + probeID;
                // ProbeResource
                ppl.addRenderWindow(colorName, this._cameraConfigs.radianceFormat, width, height, window);
                ppl.addDepthStencil(depthStencilName, gfx.Format.DEPTH_STENCIL, width, height, ResourceResidency.MEMORYLESS);

                // Rendering
                var probePass = ppl.addRenderPass(width, height, 'default');
                probePass.name = "PlanarReflectionProbe" + probeID;
                this._buildReflectionProbePass(probePass, id, probe.camera, colorName, depthStencilName, mainLight, scene);
              }
              ++probeID;
              if (probeID === maxProbeCount) {
                break;
              }
            }
          };
          _proto2._initMaterials = function _initMaterials(ppl) {
            if (this._initialized) {
              return 0;
            }
            setupPipelineConfigs(ppl, this._configs);

            // When add new effect asset, please add its uuid to the dependentAssets in cc.config.json.
            this._copyAndTonemapMaterial._uuid = "builtin-pipeline-tone-mapping-material";
            this._copyAndTonemapMaterial.initialize({
              effectName: 'pipeline/post-process/tone-mapping'
            });
            if (this._copyAndTonemapMaterial.effectAsset) {
              this._initialized = true;
            }
            return this._initialized ? 0 : 1;
          };
          return BuiltinPipelineBuilder;
        }();
        rendering.setCustomPipeline('Builtin', new BuiltinPipelineBuilder());
      } // if (rendering)
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/internal", ['./builtin-pipeline-settings.ts', './builtin-pipeline-types.ts', './builtin-pipeline.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/internal', 'chunks:///_virtual/internal'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2ZpbGU6L0M6L1Byb2dyYW1EYXRhL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNC9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL2RlZmF1bHRfcmVuZGVycGlwZWxpbmUvZmlsZTovQzovUHJvZ3JhbURhdGEvY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC40L3Jlc291cmNlcy9yZXNvdXJjZXMvM2QvZW5naW5lL2VkaXRvci9hc3NldHMvZGVmYXVsdF9yZW5kZXJwaXBlbGluZS9idWlsdGluLXBpcGVsaW5lLXNldHRpbmdzLnRzIiwiLi4vZmlsZTovQzovUHJvZ3JhbURhdGEvY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC40L3Jlc291cmNlcy9yZXNvdXJjZXMvM2QvZW5naW5lL2VkaXRvci9hc3NldHMvZGVmYXVsdF9yZW5kZXJwaXBlbGluZS9maWxlOi9DOi9Qcm9ncmFtRGF0YS9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjQvcmVzb3VyY2VzL3Jlc291cmNlcy8zZC9lbmdpbmUvZWRpdG9yL2Fzc2V0cy9kZWZhdWx0X3JlbmRlcnBpcGVsaW5lL2J1aWx0aW4tcGlwZWxpbmUtdHlwZXMudHMiLCIuLi9maWxlOi9DOi9Qcm9ncmFtRGF0YS9jb2Nvcy9lZGl0b3JzL0NyZWF0b3IvMy44LjQvcmVzb3VyY2VzL3Jlc291cmNlcy8zZC9lbmdpbmUvZWRpdG9yL2Fzc2V0cy9kZWZhdWx0X3JlbmRlcnBpcGVsaW5lL2ZpbGU6L0M6L1Byb2dyYW1EYXRhL2NvY29zL2VkaXRvcnMvQ3JlYXRvci8zLjguNC9yZXNvdXJjZXMvcmVzb3VyY2VzLzNkL2VuZ2luZS9lZGl0b3IvYXNzZXRzL2RlZmF1bHRfcmVuZGVycGlwZWxpbmUvYnVpbHRpbi1waXBlbGluZS50cyJdLCJuYW1lcyI6WyJjY2NsYXNzIiwiX2RlY29yYXRvciIsImRpc2FsbG93TXVsdGlwbGUiLCJleGVjdXRlSW5FZGl0TW9kZSIsIm1lbnUiLCJwcm9wZXJ0eSIsInJlcXVpcmVDb21wb25lbnQiLCJ0eXBlIiwiQnVpbHRpblBpcGVsaW5lU2V0dGluZ3MiLCJfZGVjIiwiX2RlYzIiLCJfZGVjMyIsIkNhbWVyYSIsIl9kZWM0IiwiQ0NCb29sZWFuIiwiX2RlYzUiLCJkaXNwbGF5TmFtZSIsIl9kZWM2IiwiZ3JvdXAiLCJpZCIsIm5hbWUiLCJfZGVjNyIsInN0eWxlIiwiQ0NJbnRlZ2VyIiwicmFuZ2UiLCJfZGVjOCIsIl9kZWM5IiwidG9vbHRpcCIsIkNDRmxvYXQiLCJzbGlkZSIsIl9kZWMxMCIsInZpc2libGUiLCJfZGVjMTEiLCJNYXRlcmlhbCIsIl9kZWMxMiIsIm1pbiIsIl9kZWMxMyIsIl9kZWMxNCIsIl9kZWMxNSIsIl9kZWMxNiIsIl9kZWMxNyIsIl9kZWMxOCIsIl9kZWMxOSIsIl9kZWMyMCIsIl9kZWMyMSIsIl9kZWMyMiIsIl9kZWMyMyIsIl9kZWMyNCIsIlRleHR1cmUyRCIsIl9kZWMyNSIsIl9kZWMyNiIsIl9kZWMyNyIsIl9kZWMyOCIsIl9kZWMyOSIsIl9kZWMzMCIsIl9jbGFzcyIsIl9jbGFzczIiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzTG9vc2UiLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0IiwiX2luaXRpYWxpemVyRGVmaW5lUHJvcGVydHkiLCJfZGVzY3JpcHRvciIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfZGVzY3JpcHRvcjIiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvbkVuYWJsZSIsImZpbGxSZXF1aXJlZFBpcGVsaW5lU2V0dGluZ3MiLCJfc2V0dGluZ3MiLCJjYW1lcmFDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJjYW1lcmEiLCJwaXBlbGluZVNldHRpbmdzIiwib25EaXNhYmxlIiwiX3RyeUVuYWJsZUVkaXRvclByZXZpZXciLCJyZW5kZXJpbmciLCJ1bmRlZmluZWQiLCJfZWRpdG9yUHJldmlldyIsInNldEVkaXRvclBpcGVsaW5lU2V0dGluZ3MiLCJfZGlzYWJsZUVkaXRvclByZXZpZXciLCJjdXJyZW50IiwiZ2V0RWRpdG9yUGlwZWxpbmVTZXR0aW5ncyIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsInNldCIsInYiLCJtc2FhIiwiZW5hYmxlZCIsInZhbHVlIiwic2FtcGxlQ291bnQiLCJNYXRoIiwicG93IiwiY2VpbCIsImxvZzIiLCJtYXgiLCJlbmFibGVTaGFkaW5nU2NhbGUiLCJzaGFkaW5nU2NhbGUiLCJkZXB0aE9mRmllbGQiLCJtYXRlcmlhbCIsImZvY3VzRGlzdGFuY2UiLCJmb2N1c1JhbmdlIiwiYm9rZWhSYWRpdXMiLCJibG9vbSIsImVuYWJsZUFscGhhTWFzayIsIml0ZXJhdGlvbnMiLCJ0aHJlc2hvbGQiLCJpbnRlbnNpdHkiLCJjb2xvckdyYWRpbmciLCJjb250cmlidXRlIiwiY29sb3JHcmFkaW5nTWFwIiwidmFsIiwiZnhhYSIsImZzciIsInNoYXJwbmVzcyIsInRvbmVNYXBwaW5nIiwiQ29tcG9uZW50IiwiX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImluaXRpYWxpemVyIiwibWFrZVBpcGVsaW5lU2V0dGluZ3MiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfUkYiLCJwb3AiLCJTYW1wbGVDb3VudCIsImdmeCIsIm1ha2VNU0FBIiwiWDQiLCJmaWxsUmVxdWlyZWRNU0FBIiwibWFrZUhCQU8iLCJyYWRpdXNTY2FsZSIsImFuZ2xlQmlhc0RlZ3JlZSIsImJsdXJTaGFycG5lc3MiLCJhb1NhdHVyYXRpb24iLCJuZWVkQmx1ciIsImZpbGxSZXF1aXJlZEhCQU8iLCJtYWtlRGVwdGhPZkZpZWxkIiwiZmlsbFJlcXVpcmVkRGVwdGhPZkZpZWxkIiwibWFrZUJsb29tIiwiZmlsbFJlcXVpcmVkQmxvb20iLCJtYWtlQ29sb3JHcmFkaW5nIiwiZmlsbFJlcXVpcmVkQ29sb3JHcmFkaW5nIiwibWFrZUZTUiIsImZpbGxSZXF1aXJlZEZTUiIsIm1ha2VGWEFBIiwiZmlsbFJlcXVpcmVkRlhBQSIsIm1ha2VUb25lTWFwcGluZyIsImZpbGxSZXF1aXJlZFRvbmVNYXBwaW5nIiwiQUFCQiIsImdlb21ldHJ5IiwiU3BoZXJlIiwiaW50ZXJzZWN0IiwiQ2xlYXJGbGFnQml0IiwiQ29sb3IiLCJGb3JtYXQiLCJGb3JtYXRGZWF0dXJlQml0IiwiTG9hZE9wIiwiU3RvcmVPcCIsIlRleHR1cmVUeXBlIiwiVmlld3BvcnQiLCJzY2VuZSIsInJlbmRlcmVyIiwiQ2FtZXJhVXNhZ2UiLCJDU01MZXZlbCIsIkxpZ2h0VHlwZSIsImZvcndhcmROZWVkQ2xlYXJDb2xvciIsImNsZWFyRmxhZyIsIkNPTE9SIiwiU1RFTkNJTCIsImdldENzbU1haW5MaWdodFZpZXdwb3J0IiwibGlnaHQiLCJ3IiwiaCIsImxldmVsIiwidnAiLCJzY3JlZW5TcGFjZVNpZ25ZIiwic2hhZG93Rml4ZWRBcmVhIiwiY3NtTGV2ZWwiLCJMRVZFTF8xIiwibGVmdCIsInRvcCIsIndpZHRoIiwidHJ1bmMiLCJoZWlnaHQiLCJmbG9vciIsIlBpcGVsaW5lQ29uZmlncyIsImlzV2ViIiwiaXNXZWJHTDEiLCJpc1dlYkdQVSIsImlzTW9iaWxlIiwiaXNIRFIiLCJ1c2VGbG9hdE91dHB1dCIsInRvbmVNYXBwaW5nVHlwZSIsInNoYWRvd0VuYWJsZWQiLCJzaGFkb3dNYXBGb3JtYXQiLCJSMzJGIiwic2hhZG93TWFwU2l6ZSIsIlZlYzIiLCJ1c2VQbGFuYXJTaGFkb3ciLCJzdXBwb3J0RGVwdGhTYW1wbGUiLCJtb2JpbGVNYXhTcG90TGlnaHRTaGFkb3dNYXBzIiwicGxhdGZvcm0iLCJWZWM0Iiwic2V0dXBQaXBlbGluZUNvbmZpZ3MiLCJwcGwiLCJjb25maWdzIiwic2FtcGxlRmVhdHVyZSIsIlNBTVBMRURfVEVYVFVSRSIsIkxJTkVBUl9GSUxURVIiLCJkZXZpY2UiLCJzeXMiLCJpc05hdGl2ZSIsImdmeEFQSSIsIkFQSSIsIldFQkdMIiwiV0VCR1BVIiwicGlwZWxpbmVTY2VuZURhdGEiLCJnZXRNYWNyb0Jvb2wiLCJwb3N0U2V0dGluZ3MiLCJzaGFkb3dJbmZvIiwic2hhZG93cyIsInBpcGVsaW5lIiwic3VwcG9ydHNSMzJGbG9hdFRleHR1cmUiLCJSR0JBOCIsInNpemUiLCJTaGFkb3dUeXBlIiwiUGxhbmFyIiwiY2FwYWJpbGl0aWVzIiwiZ2V0Rm9ybWF0RmVhdHVyZXMiLCJERVBUSF9TVEVOQ0lMIiwieCIsImNsaXBTcGFjZVNpZ25ZIiwiZGVmYXVsdFNldHRpbmdzIiwiQ2FtZXJhQ29uZmlncyIsImNvbG9yTmFtZSIsImRlcHRoU3RlbmNpbE5hbWUiLCJlbmFibGVNYWluTGlnaHRTaGFkb3dNYXAiLCJlbmFibGVNYWluTGlnaHRQbGFuYXJTaGFkb3dNYXAiLCJlbmFibGVQb3N0UHJvY2VzcyIsImVuYWJsZVByb2ZpbGVyIiwiZW5hYmxlTVNBQSIsImVuYWJsZURPRiIsImVuYWJsZUJsb29tIiwiZW5hYmxlQ29sb3JHcmFkaW5nIiwiZW5hYmxlRlhBQSIsImVuYWJsZUZTUiIsImVuYWJsZUhEUiIsImVuYWJsZVBsYW5hclJlZmxlY3Rpb25Qcm9iZSIsInVzZUZ1bGxQaXBlbGluZSIsInNpbmdsZUZvcndhcmRSYWRpYW5jZVBhc3MiLCJyYWRpYW5jZUZvcm1hdCIsInNldHRpbmdzIiwic2V0dXBQb3N0UHJvY2Vzc0NvbmZpZ3MiLCJwaXBlbGluZUNvbmZpZ3MiLCJjYW1lcmFDb25maWdzIiwic2V0dXBDYW1lcmFDb25maWdzIiwid2luZG93IiwiaXNNYWluR2FtZVdpbmRvdyIsImNhbWVyYVVzYWdlIiwiR0FNRSIsInN3YXBjaGFpbiIsImlzRWRpdG9yVmlldyIsIlNDRU5FX1ZJRVciLCJQUkVWSUVXIiwidmlzaWJpbGl0eSIsIkxheWVycyIsIkVudW0iLCJERUZBVUxUIiwibWFpbkxpZ2h0IiwiZWRpdG9yU2V0dGluZ3MiLCJSR0JBMTZGIiwiUXVldWVIaW50IiwiU2NlbmVGbGFncyIsIlJlc291cmNlRmxhZ3MiLCJSZXNvdXJjZVJlc2lkZW5jeSIsIkZvcndhcmRMaWdodGluZyIsImxpZ2h0cyIsInNoYWRvd0VuYWJsZWRTcG90TGlnaHRzIiwiX3NwaGVyZSIsImNyZWF0ZSIsIl9ib3VuZGluZ0JveCIsIl9yYW5nZWREaXJMaWdodEJvdW5kaW5nQm94IiwiY3VsbExpZ2h0cyIsImZydXN0dW0iLCJjYW1lcmFQb3MiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwic3BvdExpZ2h0cyIsIl9zdGVwIiwiZG9uZSIsImJha2VkIiwicG9zaXRpb24iLCJ5IiwieiIsInNwaGVyZUZydXN0dW0iLCJwdXNoIiwiX2l0ZXJhdG9yMiIsInNwaGVyZUxpZ2h0cyIsIl9zdGVwMiIsIl9pdGVyYXRvcjMiLCJwb2ludExpZ2h0cyIsIl9zdGVwMyIsIl9pdGVyYXRvcjQiLCJyYW5nZWREaXJMaWdodHMiLCJfc3RlcDQiLCJ0cmFuc2Zvcm0iLCJub2RlIiwiZ2V0V29ybGRNYXRyaXgiLCJhYWJiRnJ1c3R1bSIsInNvcnQiLCJsaHMiLCJyaHMiLCJWZWMzIiwic3F1YXJlZERpc3RhbmNlIiwiX2FkZExpZ2h0UXVldWVzIiwicGFzcyIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJxdWV1ZSIsImFkZFF1ZXVlIiwiQkxFTkQiLCJTUEhFUkUiLCJTUE9UIiwiUE9JTlQiLCJSQU5HRURfRElSRUNUSU9OQUwiLCJhZGRTY2VuZSIsImFkZFNwb3RsaWdodFNoYWRvd1Bhc3NlcyIsIm1heE51bVNoYWRvd01hcHMiLCJpIiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsInNoYWRvd1Bhc3MiLCJhZGRSZW5kZXJQYXNzIiwiYWRkUmVuZGVyVGFyZ2V0IiwiQ0xFQVIiLCJTVE9SRSIsImFkZERlcHRoU3RlbmNpbCIsIkRJU0NBUkQiLCJOT05FIiwiT1BBUVVFIiwiTUFTSyIsIlNIQURPV19DQVNURVIiLCJ1c2VMaWdodEZydXN0dW0iLCJhZGRMaWdodFF1ZXVlcyIsIl9pdGVyYXRvcjciLCJfc3RlcDciLCJhZGRUZXh0dXJlIiwiYWRkTGlnaHRQYXNzZXMiLCJkZXB0aFN0ZW5jaWxTdG9yZU9wIiwidmlld3BvcnQiLCJjb3VudCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJzdG9yZU9wIiwic2V0Vmlld3BvcnQiLCJMT0FEIiwiaXNNdWx0aXBsZUxpZ2h0UGFzc2VzTmVlZGVkIiwiQnVpbHRpblBpcGVsaW5lQnVpbGRlciIsIl9waXBlbGluZUV2ZW50IiwiY2NsZWdhY3kiLCJkaXJlY3RvciIsInJvb3QiLCJwaXBlbGluZUV2ZW50IiwiX2NsZWFyQ29sb3IiLCJfY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2siLCJfcmVmbGVjdGlvblByb2JlQ2xlYXJDb2xvciIsIl92aWV3cG9ydCIsIl9jb25maWdzIiwiX2NhbWVyYUNvbmZpZ3MiLCJfY29jUGFyYW1zIiwiX2NvY1RleFNpemUiLCJfYmxvb21QYXJhbXMiLCJfYmxvb21UZXhTaXplIiwiX2Jsb29tV2lkdGhzIiwiX2Jsb29tSGVpZ2h0cyIsIl9ibG9vbVRleE5hbWVzIiwiX2NvbG9yR3JhZGluZ1RleFNpemUiLCJfZnhhYVBhcmFtcyIsIl9mc3JQYXJhbXMiLCJfZnNyVGV4U2l6ZSIsIl9jb3B5QW5kVG9uZW1hcE1hdGVyaWFsIiwiX2luaXRpYWxpemVkIiwiZm9yd2FyZExpZ2h0aW5nIiwiX3Byb3RvMiIsIndpbmRvd1Jlc2l6ZSIsIm5hdGl2ZVdpZHRoIiwibmF0aXZlSGVpZ2h0IiwicmVuZGVyV2luZG93SWQiLCJhZGRSZW5kZXJXaW5kb3ciLCJURVgyRCIsIkNPTE9SX0FUVEFDSE1FTlQiLCJNRU1PUllMRVNTIiwiREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UIiwiaGFsZldpZHRoIiwiaGFsZkhlaWdodCIsImJsb29tV2lkdGgiLCJibG9vbUhlaWdodCIsInNldFByb3BlcnR5Iiwic2V0dXAiLCJjYW1lcmFzIiwiX2luaXRNYXRlcmlhbHMiLCJfaXRlcmF0b3I5IiwiX3N0ZXA5IiwiZW1pdCIsIlBpcGVsaW5lRXZlbnRUeXBlIiwiUkVOREVSX0NBTUVSQV9CRUdJTiIsIl9idWlsZEZvcndhcmRQaXBlbGluZSIsIl9idWlsZFNpbXBsZVBpcGVsaW5lIiwiUkVOREVSX0NBTUVSQV9FTkQiLCJyb3VuZCIsImNsZWFyQ29sb3IiLCJjbGVhckRlcHRoIiwiY2xlYXJTdGVuY2lsIiwiZmxhZ3MiLCJVSSIsIlBST0ZJTEVSIiwic2hvd1N0YXRpc3RpY3MiLCJzY2VuZURlcHRoIiwicmFkaWFuY2VOYW1lIiwibGRyQ29sb3JOYW1lIiwiYXNzZXJ0IiwiX2FkZENhc2NhZGVkU2hhZG93TWFwUGFzcyIsIl90cnlBZGRSZWZsZWN0aW9uUHJvYmVQYXNzZXMiLCJsYXN0UGFzcyIsImRvZlJhZGlhbmNlTmFtZSIsIl9hZGRGb3J3YXJkUmFkaWFuY2VQYXNzZXMiLCJfYWRkRGVwdGhPZkZpZWxkUGFzc2VzIiwiX2FkZEthd2FzZUR1YWxGaWx0ZXJCbG9vbVBhc3NlcyIsImNvcHlBbmRUb25lbWFwUGFzc05lZWRlZCIsImxkckNvbG9yQnVmZmVyTmFtZSIsIl9hZGRDb3B5QW5kVG9uZW1hcFBhc3MiLCJhYUNvbG9yTmFtZSIsIl9hZGRGeGFhUGFzcyIsIl9hZGRGc3JQYXNzIiwiX2FkZENvcHlQYXNzIiwiX2FkZFRvbmVtYXBSZXNpemVPclN1cGVyUmVzb2x1dGlvblBhc3NlcyIsIl9hZGRVSVF1ZXVlIiwiY3NtU3VwcG9ydGVkIiwiaW5wdXQiLCJvdXRwdXQiLCJzZXRWZWM0IiwiYWRkRnVsbHNjcmVlblF1YWQiLCJsdXRUZXgiLCJpc1NxdWFyZU1hcCIsInNldFZlYzIiLCJzZXRGbG9hdCIsIl9idWlsZEZvcndhcmRNYWluTGlnaHRQYXNzIiwiY29sb3JTdG9yZU9wIiwid2FybiIsImRvZk1hdGVyaWFsIiwiZGVwdGhTdGVuY2lsIiwiY29jTmFtZSIsInByZWZpbHRlck5hbWUiLCJib2tlaE5hbWUiLCJmaWx0ZXJOYW1lIiwiY29jUGFzcyIsInNldE1hdDQiLCJtYXRQcm9qIiwiYWRkQ2FtZXJhUXVhZCIsInByZWZpbHRlclBhc3MiLCJib2tlaFBhc3MiLCJmaWx0ZXJQYXNzIiwiY29tYmluZVBhc3MiLCJibG9vbU1hdGVyaWFsIiwic2l6ZUNvdW50IiwiZG93blBhc3MiLCJ1cFBhc3MiLCJmc3JNYXRlcmlhbCIsImNsYW1wIiwiZnNyQ29sb3JOYW1lIiwiZWFzdVBhc3MiLCJyY2FzUGFzcyIsImZ4YWFNYXRlcmlhbCIsImRpc2FibGVNU0FBIiwiX2FkZEZvcndhcmRTaW5nbGVSYWRpYW5jZVBhc3MiLCJfYWRkRm9yd2FyZE11bHRpcGxlUmFkaWFuY2VQYXNzZXMiLCJhZGRQbGFuYXJTaGFkb3dRdWV1ZSIsInNjZW5lRmxhZ3MiLCJnZW9tZXRyeVJlbmRlcmVyIiwiR0VPTUVUUlkiLCJtc2FhUmFkaWFuY2VOYW1lIiwibXNhYURlcHRoU3RlbmNpbE5hbWUiLCJtc1Bhc3MiLCJhZGRNdWx0aXNhbXBsZVJlbmRlclBhc3MiLCJyZXNvbHZlUmVuZGVyVGFyZ2V0IiwiUExBTkFSX1NIQURPVyIsImZpcnN0U3RvcmVPcCIsIl9idWlsZFJlZmxlY3Rpb25Qcm9iZVBhc3MiLCJwYWNrUkdCRSIsIlJFRkxFQ1RJT05fUFJPQkUiLCJyZWZsZWN0aW9uUHJvYmVNYW5hZ2VyIiwiaW50ZXJuYWwiLCJwcm9iZXMiLCJnZXRQcm9iZXMiLCJtYXhQcm9iZUNvdW50IiwicHJvYmVJRCIsIl9pdGVyYXRvcjEwIiwiX3N0ZXAxMCIsInByb2JlIiwibmVlZFJlbmRlciIsImFyZWEiLCJyZW5kZXJBcmVhIiwicHJvYmVUeXBlIiwiUHJvYmVUeXBlIiwiUExBTkFSIiwicmVhbHRpbWVQbGFuYXJUZXh0dXJlIiwicHJvYmVQYXNzIiwiX3V1aWQiLCJpbml0aWFsaXplIiwiZWZmZWN0TmFtZSIsImVmZmVjdEFzc2V0Iiwic2V0Q3VzdG9tUGlwZWxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTRDQSxJQUFRQSxPQUFPLEdBQWtGQyxVQUFVLENBQW5HRCxPQUFPO1FBQUVFLGdCQUFnQixHQUFnRUQsVUFBVSxDQUExRkMsZ0JBQWdCO1FBQUVDLGlCQUFpQixHQUE2Q0YsVUFBVSxDQUF4RUUsaUJBQWlCO1FB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QUksQ0FBQ21LLFFBQVEsQ0FBQzs7O1lBR3hDLElBQUksQ0FBQ2EsdUJBQXVCLENBQUMrSCxLQUFLLDJDQUEyQztZQUM3RSxJQUFJLENBQUMvSCx1QkFBdUIsQ0FBQ2dJLFVBQVUsQ0FBQztjQUFFQyxVQUFVLEVBQUU7YUFBc0MsQ0FBQztZQUU3RixJQUFJLElBQUksQ0FBQ2pJLHVCQUF1QixDQUFDa0ksV0FBVyxFQUFFO2NBQzFDLElBQUksQ0FBQ2pJLFlBQVksR0FBRyxJQUFJOztZQUc1QixPQUFPLElBQUksQ0FBQ0EsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDO1dBQ25DO1VBQUEsT0FBQXhCLHNCQUFBOztRQUdMN1IsU0FBUyxDQUFDdWIsaUJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUkxSixzQkFBc0IsRUFBRSxDQUFDO01BRXhFLENBQUM7Y0FBQyxDQUFBM08sR0FBQSxDQUFBQyxHQUFBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiBDb3B5cmlnaHQgKGMpIDIwMjEtMjAyNCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xyXG4gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXNcclxuIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcclxuIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ2FtZXJhLFxyXG4gICAgQ0NCb29sZWFuLFxyXG4gICAgQ0NGbG9hdCxcclxuICAgIENDSW50ZWdlcixcclxuICAgIENvbXBvbmVudCxcclxuICAgIE1hdGVyaWFsLFxyXG4gICAgcmVuZGVyaW5nLFxyXG4gICAgVGV4dHVyZTJELFxyXG59IGZyb20gJ2NjJztcclxuXHJcbmltcG9ydCB7IEVESVRPUiB9IGZyb20gJ2NjL2Vudic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgUGlwZWxpbmVTZXR0aW5ncyxcclxuICAgIG1ha2VQaXBlbGluZVNldHRpbmdzLFxyXG4gICAgZmlsbFJlcXVpcmVkUGlwZWxpbmVTZXR0aW5ncyxcclxufSBmcm9tICcuL2J1aWx0aW4tcGlwZWxpbmUtdHlwZXMnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBkaXNhbGxvd011bHRpcGxlLCBleGVjdXRlSW5FZGl0TW9kZSwgbWVudSwgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQsIHR5cGUgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnQnVpbHRpblBpcGVsaW5lU2V0dGluZ3MnKVxyXG5AbWVudSgnUmVuZGVyaW5nL0J1aWx0aW5QaXBlbGluZVNldHRpbmdzJylcclxuQHJlcXVpcmVDb21wb25lbnQoQ2FtZXJhKVxyXG5AZGlzYWxsb3dNdWx0aXBsZVxyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuZXhwb3J0IGNsYXNzIEJ1aWx0aW5QaXBlbGluZVNldHRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MgPSBtYWtlUGlwZWxpbmVTZXR0aW5ncygpO1xyXG5cclxuICAgIC8vIEVuYWJsZS9EaXNhYmxlXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBmaWxsUmVxdWlyZWRQaXBlbGluZVNldHRpbmdzKHRoaXMuX3NldHRpbmdzKTtcclxuICAgICAgICBjb25zdCBjYW1lcmFDb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChDYW1lcmEpITtcclxuICAgICAgICBjb25zdCBjYW1lcmEgPSBjYW1lcmFDb21wb25lbnQuY2FtZXJhO1xyXG4gICAgICAgIGNhbWVyYS5waXBlbGluZVNldHRpbmdzID0gdGhpcy5fc2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYW1lcmFDb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChDYW1lcmEpITtcclxuICAgICAgICBjb25zdCBjYW1lcmEgPSBjYW1lcmFDb21wb25lbnQuY2FtZXJhO1xyXG4gICAgICAgIGNhbWVyYS5waXBlbGluZVNldHRpbmdzID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFZGl0b3IgUHJldmlld1xyXG4gICAgQHByb3BlcnR5KENDQm9vbGVhbilcclxuICAgIHByb3RlY3RlZCBfZWRpdG9yUHJldmlldyA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdFZGl0b3IgUHJldmlldyAoRXhwZXJpbWVudGFsKScsXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIGdldCBlZGl0b3JQcmV2aWV3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lZGl0b3JQcmV2aWV3O1xyXG4gICAgfVxyXG4gICAgc2V0IGVkaXRvclByZXZpZXcodjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2VkaXRvclByZXZpZXcgPSB2O1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHJlbmRlcmluZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2VkaXRvclByZXZpZXcpIHtcclxuICAgICAgICAgICAgcmVuZGVyaW5nLnNldEVkaXRvclBpcGVsaW5lU2V0dGluZ3ModGhpcy5fc2V0dGluZ3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZUVkaXRvclByZXZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHJlbmRlcmluZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHJlbmRlcmluZy5nZXRFZGl0b3JQaXBlbGluZVNldHRpbmdzKCkgYXMgUGlwZWxpbmVTZXR0aW5ncyB8IG51bGw7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuX3NldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHJlbmRlcmluZy5zZXRFZGl0b3JQaXBlbGluZVNldHRpbmdzKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNU0FBXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnTVNBQScsIG5hbWU6ICdNdWx0aXNhbXBsZSBBbnRpLUFsaWFzaW5nJyB9LFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgIH0pXHJcbiAgICBnZXQgTXNhYUVuYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MubXNhYS5lbmFibGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IE1zYWFFbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5tc2FhLmVuYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ01TQUEnLCBuYW1lOiAnTXVsdGlzYW1wbGUgQW50aS1BbGlhc2luZycsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0ludGVnZXIsXHJcbiAgICAgICAgcmFuZ2U6IFsyLCA0LCAyXSxcclxuICAgIH0pXHJcbiAgICBzZXQgbXNhYVNhbXBsZUNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB2YWx1ZSA9IDIgKiogTWF0aC5jZWlsKE1hdGgubG9nMihNYXRoLm1heCh2YWx1ZSwgMikpKTtcclxuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKHZhbHVlLCA0KTtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5tc2FhLnNhbXBsZUNvdW50ID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IG1zYWFTYW1wbGVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5tc2FhLnNhbXBsZUNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNoYWRpbmcgU2NhbGVcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdTaGFkaW5nU2NhbGUnLCBuYW1lOiAnU2hhZGluZ1NjYWxlJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgIH0pXHJcbiAgICBzZXQgc2hhZGluZ1NjYWxlRW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZW5hYmxlU2hhZGluZ1NjYWxlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHNoYWRpbmdTY2FsZUVuYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZW5hYmxlU2hhZGluZ1NjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogJ2kxOG46cG9zdHByb2Nlc3Muc2hhZGluZ1NjYWxlJyxcclxuICAgICAgICBncm91cDogeyBpZDogJ1NoYWRpbmdTY2FsZScsIG5hbWU6ICdTaGFkaW5nU2NhbGUnIH0sXHJcbiAgICAgICAgdHlwZTogQ0NGbG9hdCxcclxuICAgICAgICByYW5nZTogWzAuMDEsIDQsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHNldCBzaGFkaW5nU2NhbGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLnNoYWRpbmdTY2FsZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBzaGFkaW5nU2NhbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc2hhZGluZ1NjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlcHRoT2ZGaWVsZFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0RlcHRoT2ZGaWVsZCcsIG5hbWU6ICdEZXB0aE9mRmllbGQgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Jvb2xlYW4sXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgc2V0IGRvZkVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5lbmFibGVkID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGRvZkVuYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZGVwdGhPZkZpZWxkLmVuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0RlcHRoT2ZGaWVsZCcsIG5hbWU6ICdEZXB0aE9mRmllbGQgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBNYXRlcmlhbCxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBzZXQgZG9mTWF0ZXJpYWwodmFsdWU6IE1hdGVyaWFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5tYXRlcmlhbCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5kZXB0aE9mRmllbGQubWF0ZXJpYWwgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZG9mTWF0ZXJpYWwoKTogTWF0ZXJpYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5kZXB0aE9mRmllbGQubWF0ZXJpYWwhO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdEZXB0aE9mRmllbGQnLCBuYW1lOiAnRGVwdGhPZkZpZWxkIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NGbG9hdCxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICB9KVxyXG4gICAgc2V0IGRvZkZvY3VzRGlzdGFuY2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5mb2N1c0Rpc3RhbmNlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgZG9mRm9jdXNEaXN0YW5jZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5kZXB0aE9mRmllbGQuZm9jdXNEaXN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnRGVwdGhPZkZpZWxkJywgbmFtZTogJ0RlcHRoT2ZGaWVsZCAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDRmxvYXQsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgfSlcclxuICAgIHNldCBkb2ZGb2N1c1JhbmdlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5kZXB0aE9mRmllbGQuZm9jdXNSYW5nZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRvZkZvY3VzUmFuZ2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZGVwdGhPZkZpZWxkLmZvY3VzUmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgQHR5cGUoQ0NGbG9hdClcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdEZXB0aE9mRmllbGQnLCBuYW1lOiAnRGVwdGhPZkZpZWxkIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NGbG9hdCxcclxuICAgICAgICByYW5nZTogWzEsIDEwLCAwLjAxXSxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIH0pXHJcbiAgICBzZXQgZG9mQm9rZWhSYWRpdXModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5ib2tlaFJhZGl1cyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRvZkJva2VoUmFkaXVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmRlcHRoT2ZGaWVsZC5ib2tlaFJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICAvLyBCbG9vbVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0Jsb29tJywgbmFtZTogJ0Jsb29tIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIHNldCBibG9vbUVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmJsb29tLmVuYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgYmxvb21FbmFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmJsb29tLmVuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0Jsb29tJywgbmFtZTogJ0Jsb29tIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogTWF0ZXJpYWwsXHJcbiAgICB9KVxyXG4gICAgc2V0IGJsb29tTWF0ZXJpYWwodmFsdWU6IE1hdGVyaWFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmJsb29tLm1hdGVyaWFsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmJsb29tLm1hdGVyaWFsID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGJsb29tTWF0ZXJpYWwoKTogTWF0ZXJpYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5ibG9vbS5tYXRlcmlhbCE7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAnaTE4bjpibG9vbS5lbmFibGVBbHBoYU1hc2snLFxyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQmxvb20nLCBuYW1lOiAnQmxvb20gKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Jvb2xlYW4sXHJcbiAgICB9KVxyXG4gICAgc2V0IGJsb29tRW5hYmxlQWxwaGFNYXNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuYmxvb20uZW5hYmxlQWxwaGFNYXNrID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGJsb29tRW5hYmxlQWxwaGFNYXNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5ibG9vbS5lbmFibGVBbHBoYU1hc2s7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAnaTE4bjpibG9vbS5pdGVyYXRpb25zJyxcclxuICAgICAgICBncm91cDogeyBpZDogJ0Jsb29tJywgbmFtZTogJ0Jsb29tIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NJbnRlZ2VyLFxyXG4gICAgICAgIHJhbmdlOiBbMSwgNiwgMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgc2V0IGJsb29tSXRlcmF0aW9ucyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuYmxvb20uaXRlcmF0aW9ucyA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBibG9vbUl0ZXJhdGlvbnMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuYmxvb20uaXRlcmF0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6ICdpMThuOmJsb29tLnRocmVzaG9sZCcsXHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdCbG9vbScsIG5hbWU6ICdCbG9vbSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDRmxvYXQsXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgfSlcclxuICAgIHNldCBibG9vbVRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuYmxvb20udGhyZXNob2xkID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgYmxvb21UaHJlc2hvbGQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuYmxvb20udGhyZXNob2xkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBibG9vbUludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuYmxvb20uaW50ZW5zaXR5ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgYmxvb21JbnRlbnNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuYmxvb20uaW50ZW5zaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbG9yIEdyYWRpbmcgKExEUilcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdDb2xvciBHcmFkaW5nJywgbmFtZTogJ0NvbG9yR3JhZGluZyAoTERSKSAoUG9zdFByb2Nlc3NpbmcpJywgc3R5bGU6ICdzZWN0aW9uJyB9LFxyXG4gICAgICAgIHR5cGU6IENDQm9vbGVhbixcclxuICAgIH0pXHJcbiAgICBzZXQgY29sb3JHcmFkaW5nRW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLmVuYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgY29sb3JHcmFkaW5nRW5hYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcuZW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnQ29sb3IgR3JhZGluZycsIG5hbWU6ICdDb2xvckdyYWRpbmcgKExEUikgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBNYXRlcmlhbCxcclxuICAgIH0pXHJcbiAgICBzZXQgY29sb3JHcmFkaW5nTWF0ZXJpYWwodmFsdWU6IE1hdGVyaWFsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmNvbG9yR3JhZGluZy5tYXRlcmlhbCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWwgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgY29sb3JHcmFkaW5nTWF0ZXJpYWwoKTogTWF0ZXJpYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWwhO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogJ2kxOG46Y29sb3JfZ3JhZGluZy5jb250cmlidXRlJyxcclxuICAgICAgICBncm91cDogeyBpZDogJ0NvbG9yIEdyYWRpbmcnLCBuYW1lOiAnQ29sb3JHcmFkaW5nIChMRFIpIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NGbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDEsIDAuMDFdLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHNldCBjb2xvckdyYWRpbmdDb250cmlidXRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcuY29udHJpYnV0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbG9yR3JhZGluZ0NvbnRyaWJ1dGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLmNvbnRyaWJ1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAnaTE4bjpjb2xvcl9ncmFkaW5nLm9yaWdpbmFsTWFwJyxcclxuICAgICAgICBncm91cDogeyBpZDogJ0NvbG9yIEdyYWRpbmcnLCBuYW1lOiAnQ29sb3JHcmFkaW5nIChMRFIpIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogVGV4dHVyZTJELFxyXG4gICAgfSlcclxuICAgIHNldCBjb2xvckdyYWRpbmdNYXAodmFsOiBUZXh0dXJlMkQpIHtcclxuICAgICAgICB0aGlzLl9zZXR0aW5ncy5jb2xvckdyYWRpbmcuY29sb3JHcmFkaW5nTWFwID0gdmFsO1xyXG4gICAgICAgIGlmIChFRElUT1IpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJ5RW5hYmxlRWRpdG9yUHJldmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBjb2xvckdyYWRpbmdNYXAoKTogVGV4dHVyZTJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY29sb3JHcmFkaW5nLmNvbG9yR3JhZGluZ01hcCE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRlhBQVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0ZYQUEnLCBuYW1lOiAnRmFzdCBBcHByb3hpbWF0ZSBBbnRpLUFsaWFzaW5nIChQb3N0UHJvY2Vzc2luZyknLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogQ0NCb29sZWFuLFxyXG4gICAgfSlcclxuICAgIHNldCBmeGFhRW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZnhhYS5lbmFibGVkID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGZ4YWFFbmFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmZ4YWEuZW5hYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnRlhBQScsIG5hbWU6ICdGYXN0IEFwcHJveGltYXRlIEFudGktQWxpYXNpbmcgKFBvc3RQcm9jZXNzaW5nKScsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBNYXRlcmlhbCxcclxuICAgIH0pXHJcbiAgICBzZXQgZnhhYU1hdGVyaWFsKHZhbHVlOiBNYXRlcmlhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5meGFhLm1hdGVyaWFsID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmZ4YWEubWF0ZXJpYWwgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgZnhhYU1hdGVyaWFsKCk6IE1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZnhhYS5tYXRlcmlhbCE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRlNSXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnRlNSJywgbmFtZTogJ0ZpZGVsaXR5RlggU3VwZXIgUmVzb2x1dGlvbicsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Jvb2xlYW4sXHJcbiAgICB9KVxyXG4gICAgc2V0IGZzckVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldHRpbmdzLmZzci5lbmFibGVkID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGZzckVuYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZnNyLmVuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBncm91cDogeyBpZDogJ0ZTUicsIG5hbWU6ICdGaWRlbGl0eUZYIFN1cGVyIFJlc29sdXRpb24nLCBzdHlsZTogJ3NlY3Rpb24nIH0sXHJcbiAgICAgICAgdHlwZTogTWF0ZXJpYWwsXHJcbiAgICB9KVxyXG4gICAgc2V0IGZzck1hdGVyaWFsKHZhbHVlOiBNYXRlcmlhbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5mc3IubWF0ZXJpYWwgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZnNyLm1hdGVyaWFsID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKEVESVRPUikge1xyXG4gICAgICAgICAgICB0aGlzLl90cnlFbmFibGVFZGl0b3JQcmV2aWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IGZzck1hdGVyaWFsKCk6IE1hdGVyaWFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuZnNyLm1hdGVyaWFsITtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGdyb3VwOiB7IGlkOiAnRlNSJywgbmFtZTogJ0ZpZGVsaXR5RlggU3VwZXIgUmVzb2x1dGlvbicsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBDQ0Zsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMSwgMC4wMV0sXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgc2V0IGZzclNoYXJwbmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MuZnNyLnNoYXJwbmVzcyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZzclNoYXJwbmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5mc3Iuc2hhcnBuZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZ3JvdXA6IHsgaWQ6ICdUb25lTWFwcGluZycsIG5hbWU6ICdUb25lTWFwcGluZycsIHN0eWxlOiAnc2VjdGlvbicgfSxcclxuICAgICAgICB0eXBlOiBNYXRlcmlhbCxcclxuICAgIH0pXHJcbiAgICBzZXQgdG9uZU1hcHBpbmdNYXRlcmlhbCh2YWx1ZTogTWF0ZXJpYWwpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MudG9uZU1hcHBpbmcubWF0ZXJpYWwgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MudG9uZU1hcHBpbmcubWF0ZXJpYWwgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyeUVuYWJsZUVkaXRvclByZXZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgdG9uZU1hcHBpbmdNYXRlcmlhbCgpOiBNYXRlcmlhbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnRvbmVNYXBwaW5nLm1hdGVyaWFsITtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gQ29weXJpZ2h0IChjKSAyMDIxLTIwMjQgWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xyXG4gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXNcclxuIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcclxuIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09ICFETyBOT1QgQ0hBTkdFIFRIRSBGT0xMT1dJTkcgU0VDVElPTiBNQU5VQUxMWSEgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBUaGUgZm9sbG93aW5nIHNlY3Rpb24gaXMgYXV0by1nZW5lcmF0ZWQuXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT0gIURPIE5PVCBDSEFOR0UgVEhFIEZPTExPV0lORyBTRUNUSU9OIE1BTlVBTExZISA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXHJcbmltcG9ydCB7IE1hdGVyaWFsLCBUZXh0dXJlMkQsIGdmeCB9IGZyb20gJ2NjJztcclxuXHJcbmNvbnN0IHsgU2FtcGxlQ291bnQgfSA9IGdmeDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTVNBQSB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgc2FtcGxlQ291bnQ6IGdmeC5TYW1wbGVDb3VudDsgLyogU2FtcGxlQ291bnQuWDQgKi9cclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1TQUEoKTogTVNBQSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHNhbXBsZUNvdW50OiBTYW1wbGVDb3VudC5YNCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRNU0FBKHZhbHVlOiBNU0FBKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnNhbXBsZUNvdW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5zYW1wbGVDb3VudCA9IFNhbXBsZUNvdW50Llg0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhCQU8ge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjsgLyogZmFsc2UgKi9cclxuICAgIHJhZGl1c1NjYWxlOiBudW1iZXI7IC8qIDEgKi9cclxuICAgIGFuZ2xlQmlhc0RlZ3JlZTogbnVtYmVyOyAvKiAxMCAqL1xyXG4gICAgYmx1clNoYXJwbmVzczogbnVtYmVyOyAvKiAzICovXHJcbiAgICBhb1NhdHVyYXRpb246IG51bWJlcjsgLyogMSAqL1xyXG4gICAgbmVlZEJsdXI6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICBbbmFtZTogc3RyaW5nXTogdW5rbm93bjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VIQkFPKCk6IEhCQU8ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICByYWRpdXNTY2FsZTogMSxcclxuICAgICAgICBhbmdsZUJpYXNEZWdyZWU6IDEwLFxyXG4gICAgICAgIGJsdXJTaGFycG5lc3M6IDMsXHJcbiAgICAgICAgYW9TYXR1cmF0aW9uOiAxLFxyXG4gICAgICAgIG5lZWRCbHVyOiBmYWxzZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRIQkFPKHZhbHVlOiBIQkFPKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnJhZGl1c1NjYWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5yYWRpdXNTY2FsZSA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuYW5nbGVCaWFzRGVncmVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5hbmdsZUJpYXNEZWdyZWUgPSAxMDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5ibHVyU2hhcnBuZXNzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5ibHVyU2hhcnBuZXNzID0gMztcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5hb1NhdHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmFvU2F0dXJhdGlvbiA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubmVlZEJsdXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLm5lZWRCbHVyID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVwdGhPZkZpZWxkIHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICAvKiByZWZjb3VudCAqLyBtYXRlcmlhbDogTWF0ZXJpYWwgfCBudWxsO1xyXG4gICAgZm9jdXNEaXN0YW5jZTogbnVtYmVyOyAvKiAwICovXHJcbiAgICBmb2N1c1JhbmdlOiBudW1iZXI7IC8qIDAgKi9cclxuICAgIGJva2VoUmFkaXVzOiBudW1iZXI7IC8qIDEgKi9cclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZURlcHRoT2ZGaWVsZCgpOiBEZXB0aE9mRmllbGQge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBtYXRlcmlhbDogbnVsbCxcclxuICAgICAgICBmb2N1c0Rpc3RhbmNlOiAwLFxyXG4gICAgICAgIGZvY3VzUmFuZ2U6IDAsXHJcbiAgICAgICAgYm9rZWhSYWRpdXM6IDEsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlcXVpcmVkRGVwdGhPZkZpZWxkKHZhbHVlOiBEZXB0aE9mRmllbGQpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubWF0ZXJpYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLm1hdGVyaWFsID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5mb2N1c0Rpc3RhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5mb2N1c0Rpc3RhbmNlID0gMDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5mb2N1c1JhbmdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5mb2N1c1JhbmdlID0gMDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5ib2tlaFJhZGl1cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuYm9rZWhSYWRpdXMgPSAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsb29tIHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICAvKiByZWZjb3VudCAqLyBtYXRlcmlhbDogTWF0ZXJpYWwgfCBudWxsO1xyXG4gICAgZW5hYmxlQWxwaGFNYXNrOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgaXRlcmF0aW9uczogbnVtYmVyOyAvKiAzICovXHJcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjsgLyogMC44ICovXHJcbiAgICBpbnRlbnNpdHk6IG51bWJlcjsgLyogMi4zICovXHJcbiAgICBbbmFtZTogc3RyaW5nXTogdW5rbm93bjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCbG9vbSgpOiBCbG9vbSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1hdGVyaWFsOiBudWxsLFxyXG4gICAgICAgIGVuYWJsZUFscGhhTWFzazogZmFsc2UsXHJcbiAgICAgICAgaXRlcmF0aW9uczogMyxcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuOCxcclxuICAgICAgICBpbnRlbnNpdHk6IDIuMyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRCbG9vbSh2YWx1ZTogQmxvb20pOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZS5lbmFibGVkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubWF0ZXJpYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLm1hdGVyaWFsID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5lbmFibGVBbHBoYU1hc2sgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZUFscGhhTWFzayA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLml0ZXJhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLml0ZXJhdGlvbnMgPSAzO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnRocmVzaG9sZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUudGhyZXNob2xkID0gMC44O1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmludGVuc2l0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuaW50ZW5zaXR5ID0gMi4zO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yR3JhZGluZyB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgLyogcmVmY291bnQgKi8gbWF0ZXJpYWw6IE1hdGVyaWFsIHwgbnVsbDtcclxuICAgIGNvbnRyaWJ1dGU6IG51bWJlcjsgLyogMSAqL1xyXG4gICAgLyogcmVmY291bnQgKi8gY29sb3JHcmFkaW5nTWFwOiBUZXh0dXJlMkQgfCBudWxsO1xyXG4gICAgW25hbWU6IHN0cmluZ106IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sb3JHcmFkaW5nKCk6IENvbG9yR3JhZGluZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIG1hdGVyaWFsOiBudWxsLFxyXG4gICAgICAgIGNvbnRyaWJ1dGU6IDEsXHJcbiAgICAgICAgY29sb3JHcmFkaW5nTWFwOiBudWxsLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZXF1aXJlZENvbG9yR3JhZGluZyh2YWx1ZTogQ29sb3JHcmFkaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLm1hdGVyaWFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5tYXRlcmlhbCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuY29udHJpYnV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuY29udHJpYnV0ZSA9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuY29sb3JHcmFkaW5nTWFwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5jb2xvckdyYWRpbmdNYXAgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZTUiB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuOyAvKiBmYWxzZSAqL1xyXG4gICAgLyogcmVmY291bnQgKi8gbWF0ZXJpYWw6IE1hdGVyaWFsIHwgbnVsbDtcclxuICAgIHNoYXJwbmVzczogbnVtYmVyOyAvKiAwLjggKi9cclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZTUigpOiBGU1Ige1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBtYXRlcmlhbDogbnVsbCxcclxuICAgICAgICBzaGFycG5lc3M6IDAuOCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRGU1IodmFsdWU6IEZTUik6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlLmVuYWJsZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUubWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnNoYXJwbmVzcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuc2hhcnBuZXNzID0gMC44O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZYQUEge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjsgLyogZmFsc2UgKi9cclxuICAgIC8qIHJlZmNvdW50ICovIG1hdGVyaWFsOiBNYXRlcmlhbCB8IG51bGw7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogdW5rbm93bjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGWEFBKCk6IEZYQUEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBtYXRlcmlhbDogbnVsbCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRGWEFBKHZhbHVlOiBGWEFBKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUuZW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFsdWUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLm1hdGVyaWFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5tYXRlcmlhbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9uZU1hcHBpbmcge1xyXG4gICAgLyogcmVmY291bnQgKi8gbWF0ZXJpYWw6IE1hdGVyaWFsIHwgbnVsbDtcclxuICAgIFtuYW1lOiBzdHJpbmddOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVRvbmVNYXBwaW5nKCk6IFRvbmVNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF0ZXJpYWw6IG51bGwsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFJlcXVpcmVkVG9uZU1hcHBpbmcodmFsdWU6IFRvbmVNYXBwaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUubWF0ZXJpYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLm1hdGVyaWFsID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQaXBlbGluZVNldHRpbmdzIHtcclxuICAgIHJlYWRvbmx5IG1zYWE6IE1TQUE7XHJcbiAgICBlbmFibGVTaGFkaW5nU2NhbGU6IGJvb2xlYW47IC8qIGZhbHNlICovXHJcbiAgICBzaGFkaW5nU2NhbGU6IG51bWJlcjsgLyogMC41ICovXHJcbiAgICByZWFkb25seSBkZXB0aE9mRmllbGQ6IERlcHRoT2ZGaWVsZDtcclxuICAgIHJlYWRvbmx5IGJsb29tOiBCbG9vbTtcclxuICAgIHJlYWRvbmx5IHRvbmVNYXBwaW5nOiBUb25lTWFwcGluZztcclxuICAgIHJlYWRvbmx5IGNvbG9yR3JhZGluZzogQ29sb3JHcmFkaW5nO1xyXG4gICAgcmVhZG9ubHkgZnNyOiBGU1I7XHJcbiAgICByZWFkb25seSBmeGFhOiBGWEFBO1xyXG4gICAgW25hbWU6IHN0cmluZ106IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGlwZWxpbmVTZXR0aW5ncygpOiBQaXBlbGluZVNldHRpbmdzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbXNhYTogbWFrZU1TQUEoKSxcclxuICAgICAgICBlbmFibGVTaGFkaW5nU2NhbGU6IGZhbHNlLFxyXG4gICAgICAgIHNoYWRpbmdTY2FsZTogMC41LFxyXG4gICAgICAgIGRlcHRoT2ZGaWVsZDogbWFrZURlcHRoT2ZGaWVsZCgpLFxyXG4gICAgICAgIGJsb29tOiBtYWtlQmxvb20oKSxcclxuICAgICAgICB0b25lTWFwcGluZzogbWFrZVRvbmVNYXBwaW5nKCksXHJcbiAgICAgICAgY29sb3JHcmFkaW5nOiBtYWtlQ29sb3JHcmFkaW5nKCksXHJcbiAgICAgICAgZnNyOiBtYWtlRlNSKCksXHJcbiAgICAgICAgZnhhYTogbWFrZUZYQUEoKSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsUmVxdWlyZWRQaXBlbGluZVNldHRpbmdzKHZhbHVlOiBQaXBlbGluZVNldHRpbmdzKTogdm9pZCB7XHJcbiAgICBpZiAoIXZhbHVlLm1zYWEpIHtcclxuICAgICAgICAodmFsdWUubXNhYSBhcyBNU0FBKSA9IG1ha2VNU0FBKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGxSZXF1aXJlZE1TQUEodmFsdWUubXNhYSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuZW5hYmxlU2hhZGluZ1NjYWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWx1ZS5lbmFibGVTaGFkaW5nU2NhbGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5zaGFkaW5nU2NhbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhbHVlLnNoYWRpbmdTY2FsZSA9IDAuNTtcclxuICAgIH1cclxuICAgIGlmICghdmFsdWUuZGVwdGhPZkZpZWxkKSB7XHJcbiAgICAgICAgKHZhbHVlLmRlcHRoT2ZGaWVsZCBhcyBEZXB0aE9mRmllbGQpID0gbWFrZURlcHRoT2ZGaWVsZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWxsUmVxdWlyZWREZXB0aE9mRmllbGQodmFsdWUuZGVwdGhPZkZpZWxkKTtcclxuICAgIH1cclxuICAgIGlmICghdmFsdWUuYmxvb20pIHtcclxuICAgICAgICAodmFsdWUuYmxvb20gYXMgQmxvb20pID0gbWFrZUJsb29tKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGxSZXF1aXJlZEJsb29tKHZhbHVlLmJsb29tKTtcclxuICAgIH1cclxuICAgIGlmICghdmFsdWUudG9uZU1hcHBpbmcpIHtcclxuICAgICAgICAodmFsdWUudG9uZU1hcHBpbmcgYXMgVG9uZU1hcHBpbmcpID0gbWFrZVRvbmVNYXBwaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbGxSZXF1aXJlZFRvbmVNYXBwaW5nKHZhbHVlLnRvbmVNYXBwaW5nKTtcclxuICAgIH1cclxuICAgIGlmICghdmFsdWUuY29sb3JHcmFkaW5nKSB7XHJcbiAgICAgICAgKHZhbHVlLmNvbG9yR3JhZGluZyBhcyBDb2xvckdyYWRpbmcpID0gbWFrZUNvbG9yR3JhZGluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWxsUmVxdWlyZWRDb2xvckdyYWRpbmcodmFsdWUuY29sb3JHcmFkaW5nKTtcclxuICAgIH1cclxuICAgIGlmICghdmFsdWUuZnNyKSB7XHJcbiAgICAgICAgKHZhbHVlLmZzciBhcyBGU1IpID0gbWFrZUZTUigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmaWxsUmVxdWlyZWRGU1IodmFsdWUuZnNyKTtcclxuICAgIH1cclxuICAgIGlmICghdmFsdWUuZnhhYSkge1xyXG4gICAgICAgICh2YWx1ZS5meGFhIGFzIEZYQUEpID0gbWFrZUZYQUEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsbFJlcXVpcmVkRlhBQSh2YWx1ZS5meGFhKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gQ29weXJpZ2h0IChjKSAyMDIxLTIwMjQgWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cclxuIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzXHJcbiBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXHJcbiBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxyXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBERUJVRywgRURJVE9SIH0gZnJvbSAnY2MvZW52JztcclxuaW1wb3J0IHtcclxuICAgIGFzc2VydCxcclxuICAgIGNsYW1wLFxyXG4gICAgZ2VvbWV0cnksXHJcbiAgICBnZngsXHJcbiAgICBMYXllcnMsXHJcbiAgICBNYXRlcmlhbCxcclxuICAgIHBpcGVsaW5lLFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICByZW5kZXJpbmcsXHJcbiAgICBzeXMsXHJcbiAgICBWZWMyLFxyXG4gICAgVmVjMyxcclxuICAgIFZlYzQsXHJcbiAgICBjY2xlZ2FjeSxcclxuICAgIFBpcGVsaW5lRXZlbnRUeXBlLFxyXG4gICAgUGlwZWxpbmVFdmVudFByb2Nlc3NvcixcclxuICAgIFJlZmxlY3Rpb25Qcm9iZU1hbmFnZXIsXHJcbiAgICB3YXJuLFxyXG59IGZyb20gJ2NjJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBQaXBlbGluZVNldHRpbmdzLFxyXG4gICAgbWFrZVBpcGVsaW5lU2V0dGluZ3MsXHJcbn0gZnJvbSAnLi9idWlsdGluLXBpcGVsaW5lLXR5cGVzJztcclxuXHJcbmNvbnN0IHsgQUFCQiwgU3BoZXJlLCBpbnRlcnNlY3QgfSA9IGdlb21ldHJ5O1xyXG5jb25zdCB7IENsZWFyRmxhZ0JpdCwgQ29sb3IsIEZvcm1hdCwgRm9ybWF0RmVhdHVyZUJpdCwgTG9hZE9wLCBTdG9yZU9wLCBUZXh0dXJlVHlwZSwgVmlld3BvcnQgfSA9IGdmeDtcclxuY29uc3QgeyBzY2VuZSB9ID0gcmVuZGVyZXI7XHJcbmNvbnN0IHsgQ2FtZXJhVXNhZ2UsIENTTUxldmVsLCBMaWdodFR5cGUgfSA9IHNjZW5lO1xyXG5cclxuZnVuY3Rpb24gZm9yd2FyZE5lZWRDbGVhckNvbG9yKGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEoY2FtZXJhLmNsZWFyRmxhZyAmIChDbGVhckZsYWdCaXQuQ09MT1IgfCAoQ2xlYXJGbGFnQml0LlNURU5DSUwgPDwgMSkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3NtTWFpbkxpZ2h0Vmlld3BvcnQoXHJcbiAgICBsaWdodDogcmVuZGVyZXIuc2NlbmUuRGlyZWN0aW9uYWxMaWdodCxcclxuICAgIHc6IG51bWJlcixcclxuICAgIGg6IG51bWJlcixcclxuICAgIGxldmVsOiBudW1iZXIsXHJcbiAgICB2cDogZ2Z4LlZpZXdwb3J0LFxyXG4gICAgc2NyZWVuU3BhY2VTaWduWTogbnVtYmVyLFxyXG4pOiB2b2lkIHtcclxuICAgIGlmIChsaWdodC5zaGFkb3dGaXhlZEFyZWEgfHwgbGlnaHQuY3NtTGV2ZWwgPT09IENTTUxldmVsLkxFVkVMXzEpIHtcclxuICAgICAgICB2cC5sZWZ0ID0gMDtcclxuICAgICAgICB2cC50b3AgPSAwO1xyXG4gICAgICAgIHZwLndpZHRoID0gTWF0aC50cnVuYyh3KTtcclxuICAgICAgICB2cC5oZWlnaHQgPSBNYXRoLnRydW5jKGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2cC5sZWZ0ID0gTWF0aC50cnVuYyhsZXZlbCAlIDIgKiAwLjUgKiB3KTtcclxuICAgICAgICBpZiAoc2NyZWVuU3BhY2VTaWduWSA+IDApIHtcclxuICAgICAgICAgICAgdnAudG9wID0gTWF0aC50cnVuYygoMSAtIE1hdGguZmxvb3IobGV2ZWwgLyAyKSkgKiAwLjUgKiBoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2cC50b3AgPSBNYXRoLnRydW5jKE1hdGguZmxvb3IobGV2ZWwgLyAyKSAqIDAuNSAqIGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2cC53aWR0aCA9IE1hdGgudHJ1bmMoMC41ICogdyk7XHJcbiAgICAgICAgdnAuaGVpZ2h0ID0gTWF0aC50cnVuYygwLjUgKiBoKTtcclxuICAgIH1cclxuICAgIHZwLmxlZnQgPSBNYXRoLm1heCgwLCB2cC5sZWZ0KTtcclxuICAgIHZwLnRvcCA9IE1hdGgubWF4KDAsIHZwLnRvcCk7XHJcbiAgICB2cC53aWR0aCA9IE1hdGgubWF4KDEsIHZwLndpZHRoKTtcclxuICAgIHZwLmhlaWdodCA9IE1hdGgubWF4KDEsIHZwLmhlaWdodCk7XHJcbn1cclxuXHJcbmNsYXNzIFBpcGVsaW5lQ29uZmlncyB7XHJcbiAgICBpc1dlYiA9IGZhbHNlO1xyXG4gICAgaXNXZWJHTDEgPSBmYWxzZTtcclxuICAgIGlzV2ViR1BVID0gZmFsc2U7XHJcbiAgICBpc01vYmlsZSA9IGZhbHNlO1xyXG4gICAgaXNIRFIgPSBmYWxzZTtcclxuICAgIHVzZUZsb2F0T3V0cHV0ID0gZmFsc2U7XHJcbiAgICB0b25lTWFwcGluZ1R5cGUgPSAwOyAvLyAwOiBBQ0VTLCAxOiBOb25lXHJcbiAgICBzaGFkb3dFbmFibGVkID0gZmFsc2U7XHJcbiAgICBzaGFkb3dNYXBGb3JtYXQgPSBGb3JtYXQuUjMyRjtcclxuICAgIHNoYWRvd01hcFNpemUgPSBuZXcgVmVjMigxLCAxKTtcclxuICAgIHVzZVBsYW5hclNoYWRvdyA9IGZhbHNlO1xyXG4gICAgc2NyZWVuU3BhY2VTaWduWSA9IDE7XHJcbiAgICBzdXBwb3J0RGVwdGhTYW1wbGUgPSBmYWxzZTtcclxuICAgIG1vYmlsZU1heFNwb3RMaWdodFNoYWRvd01hcHMgPSAxO1xyXG5cclxuICAgIHBsYXRmb3JtID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwUGlwZWxpbmVDb25maWdzKFxyXG4gICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgIGNvbmZpZ3M6IFBpcGVsaW5lQ29uZmlncyxcclxuKTogdm9pZCB7XHJcbiAgICBjb25zdCBzYW1wbGVGZWF0dXJlID0gRm9ybWF0RmVhdHVyZUJpdC5TQU1QTEVEX1RFWFRVUkUgfCBGb3JtYXRGZWF0dXJlQml0LkxJTkVBUl9GSUxURVI7XHJcbiAgICBjb25zdCBkZXZpY2UgPSBwcGwuZGV2aWNlO1xyXG4gICAgLy8gUGxhdGZvcm1cclxuICAgIGNvbmZpZ3MuaXNXZWIgPSAhc3lzLmlzTmF0aXZlO1xyXG4gICAgY29uZmlncy5pc1dlYkdMMSA9IGRldmljZS5nZnhBUEkgPT09IGdmeC5BUEkuV0VCR0w7XHJcbiAgICBjb25maWdzLmlzV2ViR1BVID0gZGV2aWNlLmdmeEFQSSA9PT0gZ2Z4LkFQSS5XRUJHUFU7XHJcbiAgICBjb25maWdzLmlzTW9iaWxlID0gc3lzLmlzTW9iaWxlO1xyXG5cclxuICAgIC8vIFJlbmRlcmluZ1xyXG4gICAgY29uZmlncy5pc0hEUiA9IHBwbC5waXBlbGluZVNjZW5lRGF0YS5pc0hEUjsgLy8gSGFzIHRvbmUgbWFwcGluZ1xyXG4gICAgY29uZmlncy51c2VGbG9hdE91dHB1dCA9IHBwbC5nZXRNYWNyb0Jvb2woJ0NDX1VTRV9GTE9BVF9PVVRQVVQnKTtcclxuICAgIGNvbmZpZ3MudG9uZU1hcHBpbmdUeXBlID0gcHBsLnBpcGVsaW5lU2NlbmVEYXRhLnBvc3RTZXR0aW5ncy50b25lTWFwcGluZ1R5cGU7XHJcbiAgICAvLyBTaGFkb3dcclxuICAgIGNvbnN0IHNoYWRvd0luZm8gPSBwcGwucGlwZWxpbmVTY2VuZURhdGEuc2hhZG93cztcclxuICAgIGNvbmZpZ3Muc2hhZG93RW5hYmxlZCA9IHNoYWRvd0luZm8uZW5hYmxlZDtcclxuICAgIGNvbmZpZ3Muc2hhZG93TWFwRm9ybWF0ID0gcGlwZWxpbmUuc3VwcG9ydHNSMzJGbG9hdFRleHR1cmUocHBsLmRldmljZSkgPyBGb3JtYXQuUjMyRiA6IEZvcm1hdC5SR0JBODtcclxuICAgIGNvbmZpZ3Muc2hhZG93TWFwU2l6ZS5zZXQoc2hhZG93SW5mby5zaXplKTtcclxuICAgIGNvbmZpZ3MudXNlUGxhbmFyU2hhZG93ID0gc2hhZG93SW5mby5lbmFibGVkICYmIHNoYWRvd0luZm8udHlwZSA9PT0gcmVuZGVyZXIuc2NlbmUuU2hhZG93VHlwZS5QbGFuYXI7XHJcbiAgICAvLyBEZXZpY2VcclxuICAgIGNvbmZpZ3Muc2NyZWVuU3BhY2VTaWduWSA9IHBwbC5kZXZpY2UuY2FwYWJpbGl0aWVzLnNjcmVlblNwYWNlU2lnblk7XHJcbiAgICBjb25maWdzLnN1cHBvcnREZXB0aFNhbXBsZSA9IChwcGwuZGV2aWNlLmdldEZvcm1hdEZlYXR1cmVzKEZvcm1hdC5ERVBUSF9TVEVOQ0lMKSAmIHNhbXBsZUZlYXR1cmUpID09PSBzYW1wbGVGZWF0dXJlO1xyXG4gICAgLy8gQ29uc3RhbnRzXHJcbiAgICBjb25zdCBzY3JlZW5TcGFjZVNpZ25ZID0gZGV2aWNlLmNhcGFiaWxpdGllcy5zY3JlZW5TcGFjZVNpZ25ZO1xyXG4gICAgY29uZmlncy5wbGF0Zm9ybS54ID0gY29uZmlncy5pc01vYmlsZSA/IDEuMCA6IDAuMDtcclxuICAgIGNvbmZpZ3MucGxhdGZvcm0udyA9IChzY3JlZW5TcGFjZVNpZ25ZICogMC41ICsgMC41KSA8PCAxIHwgKGRldmljZS5jYXBhYmlsaXRpZXMuY2xpcFNwYWNlU2lnblkgKiAwLjUgKyAwLjUpO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBtYWtlUGlwZWxpbmVTZXR0aW5ncygpO1xyXG5cclxuY2xhc3MgQ2FtZXJhQ29uZmlncyB7XHJcbiAgICBjb2xvck5hbWUgPSAnJztcclxuICAgIGRlcHRoU3RlbmNpbE5hbWUgPSAnJztcclxuICAgIGVuYWJsZU1haW5MaWdodFNoYWRvd01hcCA9IGZhbHNlO1xyXG4gICAgZW5hYmxlTWFpbkxpZ2h0UGxhbmFyU2hhZG93TWFwID0gZmFsc2U7XHJcbiAgICBlbmFibGVQb3N0UHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgZW5hYmxlUHJvZmlsZXIgPSBmYWxzZTtcclxuICAgIGVuYWJsZVNoYWRpbmdTY2FsZSA9IGZhbHNlO1xyXG4gICAgZW5hYmxlTVNBQSA9IGZhbHNlO1xyXG4gICAgZW5hYmxlRE9GID0gZmFsc2U7XHJcbiAgICBlbmFibGVCbG9vbSA9IGZhbHNlO1xyXG4gICAgZW5hYmxlQ29sb3JHcmFkaW5nID0gZmFsc2U7XHJcbiAgICBlbmFibGVGWEFBID0gZmFsc2U7XHJcbiAgICBlbmFibGVGU1IgPSBmYWxzZTtcclxuICAgIGVuYWJsZUhEUiA9IGZhbHNlO1xyXG4gICAgZW5hYmxlUGxhbmFyUmVmbGVjdGlvblByb2JlID0gZmFsc2U7XHJcbiAgICB1c2VGdWxsUGlwZWxpbmUgPSBmYWxzZTtcclxuICAgIHNpbmdsZUZvcndhcmRSYWRpYW5jZVBhc3MgPSBmYWxzZTtcclxuICAgIHJhZGlhbmNlRm9ybWF0ID0gZ2Z4LkZvcm1hdC5SR0JBODtcclxuICAgIHNoYWRpbmdTY2FsZSA9IDAuNTtcclxuICAgIHNldHRpbmdzOiBQaXBlbGluZVNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cFBvc3RQcm9jZXNzQ29uZmlncyhcclxuICAgIHBpcGVsaW5lQ29uZmlnczogUGlwZWxpbmVDb25maWdzLFxyXG4gICAgc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICBjYW1lcmFDb25maWdzOiBDYW1lcmFDb25maWdzLFxyXG4pIHtcclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlRE9GID0gcGlwZWxpbmVDb25maWdzLnN1cHBvcnREZXB0aFNhbXBsZVxyXG4gICAgICAgICYmIHNldHRpbmdzLmRlcHRoT2ZGaWVsZC5lbmFibGVkXHJcbiAgICAgICAgJiYgISFzZXR0aW5ncy5kZXB0aE9mRmllbGQubWF0ZXJpYWw7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy5lbmFibGVCbG9vbSA9IHNldHRpbmdzLmJsb29tLmVuYWJsZWRcclxuICAgICAgICAmJiAhIXNldHRpbmdzLmJsb29tLm1hdGVyaWFsO1xyXG5cclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlQ29sb3JHcmFkaW5nID0gc2V0dGluZ3MuY29sb3JHcmFkaW5nLmVuYWJsZWRcclxuICAgICAgICAmJiAhIXNldHRpbmdzLmNvbG9yR3JhZGluZy5tYXRlcmlhbFxyXG4gICAgICAgICYmICEhc2V0dGluZ3MuY29sb3JHcmFkaW5nLmNvbG9yR3JhZGluZ01hcDtcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLmVuYWJsZUZYQUEgPSBzZXR0aW5ncy5meGFhLmVuYWJsZWRcclxuICAgICAgICAmJiAhIXNldHRpbmdzLmZ4YWEubWF0ZXJpYWw7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy5lbmFibGVQb3N0UHJvY2VzcyA9IChjYW1lcmFDb25maWdzLmVuYWJsZURPRlxyXG4gICAgICAgIHx8IGNhbWVyYUNvbmZpZ3MuZW5hYmxlQmxvb21cclxuICAgICAgICB8fCBjYW1lcmFDb25maWdzLmVuYWJsZUNvbG9yR3JhZGluZ1xyXG4gICAgICAgIHx8IGNhbWVyYUNvbmZpZ3MuZW5hYmxlRlhBQSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQ2FtZXJhQ29uZmlncyhcclxuICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgcGlwZWxpbmVDb25maWdzOiBQaXBlbGluZUNvbmZpZ3MsXHJcbiAgICBjYW1lcmFDb25maWdzOiBDYW1lcmFDb25maWdzLFxyXG4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHdpbmRvdyA9IGNhbWVyYS53aW5kb3c7XHJcbiAgICBjb25zdCBpc01haW5HYW1lV2luZG93OiBib29sZWFuID0gY2FtZXJhLmNhbWVyYVVzYWdlID09PSBDYW1lcmFVc2FnZS5HQU1FICYmICEhd2luZG93LnN3YXBjaGFpbjtcclxuICAgIGNvbnN0IGlzRWRpdG9yVmlldzogYm9vbGVhbiA9IGNhbWVyYS5jYW1lcmFVc2FnZSA9PT0gQ2FtZXJhVXNhZ2UuU0NFTkVfVklFVyB8fCBjYW1lcmEuY2FtZXJhVXNhZ2UgPT09IENhbWVyYVVzYWdlLlBSRVZJRVc7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy5jb2xvck5hbWUgPSB3aW5kb3cuY29sb3JOYW1lO1xyXG4gICAgY2FtZXJhQ29uZmlncy5kZXB0aFN0ZW5jaWxOYW1lID0gd2luZG93LmRlcHRoU3RlbmNpbE5hbWU7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy51c2VGdWxsUGlwZWxpbmUgPSAoY2FtZXJhLnZpc2liaWxpdHkgJiAoTGF5ZXJzLkVudW0uREVGQVVMVCkpICE9PSAwO1xyXG5cclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlTWFpbkxpZ2h0U2hhZG93TWFwID0gcGlwZWxpbmVDb25maWdzLnNoYWRvd0VuYWJsZWRcclxuICAgICAgICAmJiAhcGlwZWxpbmVDb25maWdzLnVzZVBsYW5hclNoYWRvd1xyXG4gICAgICAgICYmICEhY2FtZXJhLnNjZW5lXHJcbiAgICAgICAgJiYgISFjYW1lcmEuc2NlbmUubWFpbkxpZ2h0XHJcbiAgICAgICAgJiYgY2FtZXJhLnNjZW5lLm1haW5MaWdodC5zaGFkb3dFbmFibGVkO1xyXG5cclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlTWFpbkxpZ2h0UGxhbmFyU2hhZG93TWFwID0gcGlwZWxpbmVDb25maWdzLnNoYWRvd0VuYWJsZWRcclxuICAgICAgICAmJiBwaXBlbGluZUNvbmZpZ3MudXNlUGxhbmFyU2hhZG93XHJcbiAgICAgICAgJiYgISFjYW1lcmEuc2NlbmVcclxuICAgICAgICAmJiAhIWNhbWVyYS5zY2VuZS5tYWluTGlnaHRcclxuICAgICAgICAmJiBjYW1lcmEuc2NlbmUubWFpbkxpZ2h0LnNoYWRvd0VuYWJsZWQ7XHJcblxyXG4gICAgY2FtZXJhQ29uZmlncy5lbmFibGVQbGFuYXJSZWZsZWN0aW9uUHJvYmUgPSBpc01haW5HYW1lV2luZG93IHx8IGNhbWVyYS5jYW1lcmFVc2FnZSA9PT0gQ2FtZXJhVXNhZ2UuU0NFTkVfVklFVztcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLmVuYWJsZVByb2ZpbGVyID0gREVCVUcgJiYgaXNNYWluR2FtZVdpbmRvdztcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLnNldHRpbmdzID0gY2FtZXJhLnBpcGVsaW5lU2V0dGluZ3NcclxuICAgICAgICA/IGNhbWVyYS5waXBlbGluZVNldHRpbmdzIGFzIFBpcGVsaW5lU2V0dGluZ3MgOiBkZWZhdWx0U2V0dGluZ3M7XHJcblxyXG4gICAgc2V0dXBQb3N0UHJvY2Vzc0NvbmZpZ3MocGlwZWxpbmVDb25maWdzLCBjYW1lcmFDb25maWdzLnNldHRpbmdzLCBjYW1lcmFDb25maWdzKTtcclxuXHJcbiAgICBpZiAoaXNFZGl0b3JWaWV3KSB7XHJcbiAgICAgICAgY29uc3QgZWRpdG9yU2V0dGluZ3MgPSByZW5kZXJpbmcuZ2V0RWRpdG9yUGlwZWxpbmVTZXR0aW5ncygpIGFzIFBpcGVsaW5lU2V0dGluZ3MgfCBudWxsO1xyXG4gICAgICAgIGlmIChlZGl0b3JTZXR0aW5ncykge1xyXG4gICAgICAgICAgICBjYW1lcmFDb25maWdzLnNldHRpbmdzID0gZWRpdG9yU2V0dGluZ3M7XHJcbiAgICAgICAgICAgIHNldHVwUG9zdFByb2Nlc3NDb25maWdzKHBpcGVsaW5lQ29uZmlncyxcclxuICAgICAgICAgICAgICAgIGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MsIGNhbWVyYUNvbmZpZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNU0FBXHJcbiAgICBjYW1lcmFDb25maWdzLmVuYWJsZU1TQUEgPSBjYW1lcmFDb25maWdzLnNldHRpbmdzLm1zYWEuZW5hYmxlZFxyXG4gICAgICAgICYmICFwaXBlbGluZUNvbmZpZ3MuaXNXZWIgLy8gVE9ETyh6aG91emhlbmdsb25nKTogcmVtb3ZlIHRoaXMgY29uc3RyYWludFxyXG4gICAgICAgICYmICFwaXBlbGluZUNvbmZpZ3MuaXNXZWJHTDE7XHJcblxyXG4gICAgLy8gU2hhZGluZyBzY2FsZVxyXG4gICAgY2FtZXJhQ29uZmlncy5zaGFkaW5nU2NhbGUgPSBjYW1lcmFDb25maWdzLnNldHRpbmdzLnNoYWRpbmdTY2FsZTtcclxuICAgIGNhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlID0gY2FtZXJhQ29uZmlncy5zZXR0aW5ncy5lbmFibGVTaGFkaW5nU2NhbGVcclxuICAgICAgICAmJiBjYW1lcmFDb25maWdzLnNoYWRpbmdTY2FsZSAhPT0gMS4wO1xyXG5cclxuICAgIC8vIEZTUiAoRGVwZW5kIG9uIFNoYWRpbmcgc2NhbGUpXHJcbiAgICBjYW1lcmFDb25maWdzLmVuYWJsZUZTUiA9IGNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuZnNyLmVuYWJsZWRcclxuICAgICAgICAmJiAhIWNhbWVyYUNvbmZpZ3Muc2V0dGluZ3MuZnNyLm1hdGVyaWFsXHJcbiAgICAgICAgJiYgY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGVcclxuICAgICAgICAmJiBjYW1lcmFDb25maWdzLnNoYWRpbmdTY2FsZSA8IDEuMDtcclxuXHJcbiAgICAvLyBGb3J3YXJkIHJlbmRlcmluZyAoRGVwZW5kIG9uIE1TQUEgYW5kIFRCUilcclxuICAgIGNhbWVyYUNvbmZpZ3Muc2luZ2xlRm9yd2FyZFJhZGlhbmNlUGFzc1xyXG4gICAgICAgID0gcGlwZWxpbmVDb25maWdzLmlzTW9iaWxlIHx8IGNhbWVyYUNvbmZpZ3MuZW5hYmxlTVNBQTtcclxuXHJcbiAgICBjYW1lcmFDb25maWdzLmVuYWJsZUhEUiA9IGNhbWVyYUNvbmZpZ3MudXNlRnVsbFBpcGVsaW5lXHJcbiAgICAgICAgJiYgcGlwZWxpbmVDb25maWdzLnVzZUZsb2F0T3V0cHV0O1xyXG5cclxuICAgIGNhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQgPSBjYW1lcmFDb25maWdzLmVuYWJsZUhEUlxyXG4gICAgICAgID8gZ2Z4LkZvcm1hdC5SR0JBMTZGIDogZ2Z4LkZvcm1hdC5SR0JBODtcclxufVxyXG5cclxuaWYgKHJlbmRlcmluZykge1xyXG5cclxuICAgIGNvbnN0IHsgUXVldWVIaW50LCBTY2VuZUZsYWdzLCBSZXNvdXJjZUZsYWdzLCBSZXNvdXJjZVJlc2lkZW5jeSB9ID0gcmVuZGVyaW5nO1xyXG5cclxuICAgIGNsYXNzIEZvcndhcmRMaWdodGluZyB7XHJcbiAgICAgICAgLy8gQWN0aXZlIGxpZ2h0c1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbGlnaHRzOiByZW5kZXJlci5zY2VuZS5MaWdodFtdID0gW107XHJcbiAgICAgICAgLy8gQWN0aXZlIHNwb3QgbGlnaHRzIHdpdGggc2hhZG93cyAoTXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggYGxpZ2h0c2ApXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzaGFkb3dFbmFibGVkU3BvdExpZ2h0czogcmVuZGVyZXIuc2NlbmUuU3BvdExpZ2h0W10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gSW50ZXJuYWwgY2FjaGVkIHJlc291cmNlc1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3NwaGVyZSA9IFNwaGVyZS5jcmVhdGUoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYm91bmRpbmdCb3ggPSBuZXcgQUFCQigpO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3JhbmdlZERpckxpZ2h0Qm91bmRpbmdCb3ggPSBuZXcgQUFCQigwLjAsIDAuMCwgMC4wLCAwLjUsIDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEludGVyZmFjZVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBwdWJsaWMgY3VsbExpZ2h0cyhzY2VuZTogcmVuZGVyZXIuUmVuZGVyU2NlbmUsIGZydXN0dW06IGdlb21ldHJ5LkZydXN0dW0sIGNhbWVyYVBvcz86IFZlYzMpOiB2b2lkIHtcclxuICAgICAgICAgICAgLy8gVE9ETyh6aG91emhlbmdsb25nKTogTWFrZSBsaWdodCBjdWxsaW5nIG5hdGl2ZVxyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIC8vIHNwb3QgbGlnaHRzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2Ygc2NlbmUuc3BvdExpZ2h0cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpZ2h0LmJha2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTcGhlcmUuc2V0KHRoaXMuX3NwaGVyZSwgbGlnaHQucG9zaXRpb24ueCwgbGlnaHQucG9zaXRpb24ueSwgbGlnaHQucG9zaXRpb24ueiwgbGlnaHQucmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdC5zcGhlcmVGcnVzdHVtKHRoaXMuX3NwaGVyZSwgZnJ1c3R1bSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlnaHQuc2hhZG93RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzLnB1c2gobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlnaHRzLnB1c2gobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzcGhlcmUgbGlnaHRzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2Ygc2NlbmUuc3BoZXJlTGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlnaHQuYmFrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNwaGVyZS5zZXQodGhpcy5fc3BoZXJlLCBsaWdodC5wb3NpdGlvbi54LCBsaWdodC5wb3NpdGlvbi55LCBsaWdodC5wb3NpdGlvbi56LCBsaWdodC5yYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0LnNwaGVyZUZydXN0dW0odGhpcy5fc3BoZXJlLCBmcnVzdHVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlnaHRzLnB1c2gobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBvaW50IGxpZ2h0c1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHNjZW5lLnBvaW50TGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlnaHQuYmFrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNwaGVyZS5zZXQodGhpcy5fc3BoZXJlLCBsaWdodC5wb3NpdGlvbi54LCBsaWdodC5wb3NpdGlvbi55LCBsaWdodC5wb3NpdGlvbi56LCBsaWdodC5yYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0LnNwaGVyZUZydXN0dW0odGhpcy5fc3BoZXJlLCBmcnVzdHVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlnaHRzLnB1c2gobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJhbmdlZCBkaXIgbGlnaHRzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGlnaHQgb2Ygc2NlbmUucmFuZ2VkRGlyTGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICBBQUJCLnRyYW5zZm9ybSh0aGlzLl9ib3VuZGluZ0JveCwgdGhpcy5fcmFuZ2VkRGlyTGlnaHRCb3VuZGluZ0JveCwgbGlnaHQubm9kZSEuZ2V0V29ybGRNYXRyaXgoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0LmFhYmJGcnVzdHVtKHRoaXMuX2JvdW5kaW5nQm94LCBmcnVzdHVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlnaHRzLnB1c2gobGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhUG9zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzLnNvcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgKGxocywgcmhzKSA9PiBWZWMzLnNxdWFyZWREaXN0YW5jZShjYW1lcmFQb3MsIGxocy5wb3NpdGlvbikgLSBWZWMzLnNxdWFyZWREaXN0YW5jZShjYW1lcmFQb3MsIHJocy5wb3NpdGlvbiksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgX2FkZExpZ2h0UXVldWVzKGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLCBwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHRoaXMubGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWV1ZSA9IHBhc3MuYWRkUXVldWUoUXVldWVIaW50LkJMRU5ELCAnZm9yd2FyZC1hZGQnKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobGlnaHQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGlnaHRUeXBlLlNQSEVSRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWUubmFtZSA9ICdzcGhlcmUtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIExpZ2h0VHlwZS5TUE9UOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5uYW1lID0gJ3Nwb3QtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIExpZ2h0VHlwZS5QT0lOVDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWUubmFtZSA9ICdwb2ludC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTGlnaHRUeXBlLlJBTkdFRF9ESVJFQ1RJT05BTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWUubmFtZSA9ICdyYW5nZWQtZGlyZWN0aW9uYWwtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5uYW1lID0gJ3Vua25vd24tbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcXVldWUuYWRkU2NlbmUoXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgICAgIFNjZW5lRmxhZ3MuQkxFTkQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBhZGRTcG90bGlnaHRTaGFkb3dQYXNzZXMoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICAgICBtYXhOdW1TaGFkb3dNYXBzOiBudW1iZXIsXHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dNYXBTaXplID0gcHBsLnBpcGVsaW5lU2NlbmVEYXRhLnNoYWRvd3Muc2l6ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Bhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhzaGFkb3dNYXBTaXplLngsIHNoYWRvd01hcFNpemUueSwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Bhc3MubmFtZSA9IGBTcG90TGlnaHRTaGFkb3dQYXNzJHtpfWA7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dQYXNzLmFkZFJlbmRlclRhcmdldChgU3BvdFNoYWRvd01hcCR7aX1gLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIG5ldyBDb2xvcigxLCAxLCAxLCAxKSk7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dQYXNzLmFkZERlcHRoU3RlbmNpbChgU3BvdFNoYWRvd0RlcHRoJHtpfWAsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5ESVNDQVJEKTtcclxuICAgICAgICAgICAgICAgIHNoYWRvd1Bhc3MuYWRkUXVldWUoUXVldWVIaW50Lk5PTkUsICdzaGFkb3ctY2FzdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLCBTY2VuZUZsYWdzLk9QQVFVRSB8IFNjZW5lRmxhZ3MuTUFTSyB8IFNjZW5lRmxhZ3MuU0hBRE9XX0NBU1RFUilcclxuICAgICAgICAgICAgICAgICAgICAudXNlTGlnaHRGcnVzdHVtKGxpZ2h0KTtcclxuICAgICAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgICAgIGlmIChpID49IG1heE51bVNoYWRvd01hcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgYWRkTGlnaHRRdWV1ZXMocGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLCBtYXhOdW1TaGFkb3dNYXBzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRkTGlnaHRRdWV1ZXMoY2FtZXJhLCBwYXNzKTtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHRoaXMuc2hhZG93RW5hYmxlZFNwb3RMaWdodHMpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBzcG90LWxpZ2h0IHBhc3NcclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgbGFzdCBSZW5kZXJQYXNzIHRvIHRoZSBgcGFzc2AgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oemhvdXpoZW5nbG9uZyk6IEZpeCBwZXIgcXVldWUgYWRkVGV4dHVyZVxyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKGBTcG90U2hhZG93TWFwJHtpfWAsICdjY19zcG90U2hhZG93TWFwJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWV1ZSA9IHBhc3MuYWRkUXVldWUoUXVldWVIaW50LkJMRU5ELCAnZm9yd2FyZC1hZGQnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXVlLmFkZFNjZW5lKGNhbWVyYSwgU2NlbmVGbGFncy5CTEVORCwgbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gbWF4TnVtU2hhZG93TWFwcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBOb3RpY2U6IEZvcndhcmRMaWdodGluZyBjYW5ub3QgaGFuZGxlIGEgbG90IG9mIGxpZ2h0cy5cclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgdG9vIG1hbnkgbGlnaHRzLCB0aGUgcGVyZm9ybWFuY2Ugd2lsbCBiZSB2ZXJ5IHBvb3IuXHJcbiAgICAgICAgLy8gSWYgbWFueSBsaWdodHMgYXJlIG5lZWRlZCwgcGxlYXNlIGltcGxlbWVudCBhIGZvcndhcmQrIG9yIGRlZmVycmVkIHJlbmRlcmluZyBwaXBlbGluZS5cclxuICAgICAgICBwdWJsaWMgYWRkTGlnaHRQYXNzZXMoXHJcbiAgICAgICAgICAgIGNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbFN0b3JlT3A6IGdmeC5TdG9yZU9wLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLCAvLyB3aW5kb3cgaWRcclxuICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICAgICB2aWV3cG9ydDogZ2Z4LlZpZXdwb3J0LFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBwYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcixcclxuICAgICAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZExpZ2h0UXVldWVzKGNhbWVyYSwgcGFzcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBzaGFkb3dNYXBTaXplID0gcHBsLnBpcGVsaW5lU2NlbmVEYXRhLnNoYWRvd3Muc2l6ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsaWdodCBvZiB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dQYXNzID0gcHBsLmFkZFJlbmRlclBhc3Moc2hhZG93TWFwU2l6ZS54LCBzaGFkb3dNYXBTaXplLnksICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dQYXNzLm5hbWUgPSAnU3BvdGxpZ2h0U2hhZG93UGFzcyc7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXVzZSBjc20gc2hhZG93IG1hcFxyXG4gICAgICAgICAgICAgICAgc2hhZG93UGFzcy5hZGRSZW5kZXJUYXJnZXQoYFNoYWRvd01hcCR7aWR9YCwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCBuZXcgQ29sb3IoMSwgMSwgMSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93UGFzcy5hZGREZXB0aFN0ZW5jaWwoYFNoYWRvd0RlcHRoJHtpZH1gLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuRElTQ0FSRCk7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3dQYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5OT05FLCAnc2hhZG93LWNhc3RlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSwgU2NlbmVGbGFncy5PUEFRVUUgfCBTY2VuZUZsYWdzLk1BU0sgfCBTY2VuZUZsYWdzLlNIQURPV19DQVNURVIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZUxpZ2h0RnJ1c3R1bShsaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHNwb3QtbGlnaHQgcGFzc1xyXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBsYXN0IFJlbmRlclBhc3MgdG8gdGhlIGBwYXNzYCB2YXJpYWJsZVxyXG4gICAgICAgICAgICAgICAgKytjb3VudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlT3AgPSBjb3VudCA9PT0gdGhpcy5zaGFkb3dFbmFibGVkU3BvdExpZ2h0cy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA/IGRlcHRoU3RlbmNpbFN0b3JlT3BcclxuICAgICAgICAgICAgICAgICAgICA6IFN0b3JlT3AuU1RPUkU7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICBwYXNzLm5hbWUgPSAnU3BvdGxpZ2h0V2l0aFNoYWRvd01hcCc7XHJcbiAgICAgICAgICAgICAgICBwYXNzLnNldFZpZXdwb3J0KHZpZXdwb3J0KTtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkxPQUQpO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSwgTG9hZE9wLkxPQUQsIHN0b3JlT3ApO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKGBTaGFkb3dNYXAke2lkfWAsICdjY19zcG90U2hhZG93TWFwJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWV1ZSA9IHBhc3MuYWRkUXVldWUoUXVldWVIaW50LkJMRU5ELCAnZm9yd2FyZC1hZGQnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXVlLmFkZFNjZW5lKFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICBTY2VuZUZsYWdzLkJMRU5ELFxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc011bHRpcGxlTGlnaHRQYXNzZXNOZWVkZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYWRvd0VuYWJsZWRTcG90TGlnaHRzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIEJ1aWx0aW5QaXBlbGluZUJ1aWxkZXIgaW1wbGVtZW50cyByZW5kZXJpbmcuUGlwZWxpbmVCdWlsZGVyIHtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9waXBlbGluZUV2ZW50OiBQaXBlbGluZUV2ZW50UHJvY2Vzc29yID0gY2NsZWdhY3kuZGlyZWN0b3Iucm9vdC5waXBlbGluZUV2ZW50IGFzIFBpcGVsaW5lRXZlbnRQcm9jZXNzb3I7XHJcbiAgICAgICAgLy8gSW50ZXJuYWwgY2FjaGVkIHJlc291cmNlc1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NsZWFyQ29sb3IgPSBuZXcgQ29sb3IoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2sgPSBuZXcgQ29sb3IoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfcmVmbGVjdGlvblByb2JlQ2xlYXJDb2xvciA9IG5ldyBWZWMzKDAsIDAsIDApO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3ZpZXdwb3J0ID0gbmV3IFZpZXdwb3J0KCk7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfY29uZmlncyA9IG5ldyBQaXBlbGluZUNvbmZpZ3MoKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jYW1lcmFDb25maWdzID0gbmV3IENhbWVyYUNvbmZpZ3MoKTtcclxuICAgICAgICAvLyBEZXB0aE9mRmllbGRcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jb2NQYXJhbXMgPSBuZXcgVmVjNCgwLCAwLCAwLCAwKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jb2NUZXhTaXplID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gQmxvb21cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9ibG9vbVBhcmFtcyA9IG5ldyBWZWM0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2Jsb29tVGV4U2l6ZSA9IG5ldyBWZWM0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2Jsb29tV2lkdGhzOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYmxvb21IZWlnaHRzOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYmxvb21UZXhOYW1lczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICAgIC8vIENvbG9yIEdyYWRpbmdcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9jb2xvckdyYWRpbmdUZXhTaXplID0gbmV3IFZlYzIoMCwgMCk7XHJcbiAgICAgICAgLy8gRlhBQVxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2Z4YWFQYXJhbXMgPSBuZXcgVmVjNCgwLCAwLCAwLCAwKTtcclxuICAgICAgICAvLyBGU1JcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9mc3JQYXJhbXMgPSBuZXcgVmVjNCgwLCAwLCAwLCAwKTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9mc3JUZXhTaXplID0gbmV3IFZlYzQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgLy8gTWF0ZXJpYWxzXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfY29weUFuZFRvbmVtYXBNYXRlcmlhbCA9IG5ldyBNYXRlcmlhbCgpO1xyXG5cclxuICAgICAgICAvLyBJbnRlcm5hbCBTdGF0ZXNcclxuICAgICAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlOyAvLyBUT0RPKHpob3V6aGVuZ2xvbmcpOiBNYWtlIGRlZmF1bHQgZWZmZWN0IGFzc2V0IGxvYWRpbmcgZWFybGllciBhbmQgcmVtb3ZlIHRoaXMgZmxhZ1xyXG5cclxuICAgICAgICAvLyBGb3J3YXJkIGxpZ2h0aW5nXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmb3J3YXJkTGlnaHRpbmcgPSBuZXcgRm9yd2FyZExpZ2h0aW5nKCk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBJbnRlcmZhY2VcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgd2luZG93UmVzaXplKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICB3aW5kb3c6IHJlbmRlcmVyLlJlbmRlcldpbmRvdyxcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIG5hdGl2ZVdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG5hdGl2ZUhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICBzZXR1cFBpcGVsaW5lQ29uZmlncyhwcGwsIHRoaXMuX2NvbmZpZ3MpO1xyXG4gICAgICAgICAgICBzZXR1cENhbWVyYUNvbmZpZ3MoY2FtZXJhLCB0aGlzLl9jb25maWdzLCB0aGlzLl9jYW1lcmFDb25maWdzKTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLl9jYW1lcmFDb25maWdzLnNldHRpbmdzO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHdpbmRvdy5yZW5kZXJXaW5kb3dJZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGVcclxuICAgICAgICAgICAgICAgID8gTWF0aC5tYXgoTWF0aC5mbG9vcihuYXRpdmVXaWR0aCAqIHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2hhZGluZ1NjYWxlKSwgMSlcclxuICAgICAgICAgICAgICAgIDogbmF0aXZlV2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KE1hdGguZmxvb3IobmF0aXZlSGVpZ2h0ICogdGhpcy5fY2FtZXJhQ29uZmlncy5zaGFkaW5nU2NhbGUpLCAxKVxyXG4gICAgICAgICAgICAgICAgOiBuYXRpdmVIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW5kZXIgV2luZG93IChVSSlcclxuICAgICAgICAgICAgcHBsLmFkZFJlbmRlcldpbmRvdyh0aGlzLl9jYW1lcmFDb25maWdzLmNvbG9yTmFtZSxcclxuICAgICAgICAgICAgICAgIEZvcm1hdC5SR0JBOCwgbmF0aXZlV2lkdGgsIG5hdGl2ZUhlaWdodCwgd2luZG93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhQ29uZmlncy5kZXB0aFN0ZW5jaWxOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZERlcHRoU3RlbmNpbChgU2NhbGVkU2NlbmVEZXB0aCR7aWR9YCwgRm9ybWF0LkRFUFRIX1NURU5DSUwsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgU2NhbGVkUmFkaWFuY2Uke2lkfWAsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgU2NhbGVkTGRyQ29sb3Ike2lkfWAsIEZvcm1hdC5SR0JBOCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkRGVwdGhTdGVuY2lsKGBTY2VuZURlcHRoJHtpZH1gLCBGb3JtYXQuREVQVEhfU1RFTkNJTCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBSYWRpYW5jZSR7aWR9YCwgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBMZHJDb2xvciR7aWR9YCwgRm9ybWF0LlJHQkE4LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlRlNSKSB7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBGc3JDb2xvciR7aWR9YCwgRm9ybWF0LlJHQkE4LCBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTXNhYVJhZGlhbmNlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZU1TQUEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGljZTogV2UgbmV2ZXIgc3RvcmUgbXVsdGlzYW1wbGUgcmVzdWx0cy5cclxuICAgICAgICAgICAgICAgIC8vIFRoZXNlIHNhbXBsZXMgYXJlIGFsd2F5cyByZXNvbHZlZCBhbmQgZGlzY2FyZGVkIGF0IHRoZSBlbmQgb2YgdGhlIHJlbmRlciBwYXNzLlxyXG4gICAgICAgICAgICAgICAgLy8gU28gdGhlIFJlc291cmNlUmVzaWRlbmN5IHNob3VsZCBiZSBNRU1PUllMRVNTLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlSERSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHBsLmFkZFRleHR1cmUoYE1zYWFSYWRpYW5jZSR7aWR9YCwgVGV4dHVyZVR5cGUuVEVYMkQsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDEsIDEsIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQsIFJlc291cmNlRmxhZ3MuQ09MT1JfQVRUQUNITUVOVCwgUmVzb3VyY2VSZXNpZGVuY3kuTUVNT1JZTEVTUyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBwbC5hZGRUZXh0dXJlKGBNc2FhUmFkaWFuY2Uke2lkfWAsIFRleHR1cmVUeXBlLlRFWDJELCBGb3JtYXQuUkdCQTgsIHdpZHRoLCBoZWlnaHQsIDEsIDEsIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQsIFJlc291cmNlRmxhZ3MuQ09MT1JfQVRUQUNITUVOVCwgUmVzb3VyY2VSZXNpZGVuY3kuTUVNT1JZTEVTUyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkVGV4dHVyZShgTXNhYURlcHRoU3RlbmNpbCR7aWR9YCwgVGV4dHVyZVR5cGUuVEVYMkQsIEZvcm1hdC5ERVBUSF9TVEVOQ0lMLCB3aWR0aCwgaGVpZ2h0LCAxLCAxLCAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm1zYWEuc2FtcGxlQ291bnQsIFJlc291cmNlRmxhZ3MuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5ULCBSZXNvdXJjZVJlc2lkZW5jeS5NRU1PUllMRVNTKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWFpbmxpZ2h0IFNoYWRvd01hcFxyXG4gICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KFxyXG4gICAgICAgICAgICAgICAgYFNoYWRvd01hcCR7aWR9YCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3Muc2hhZG93TWFwRm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlncy5zaGFkb3dNYXBTaXplLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLnNoYWRvd01hcFNpemUueSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHBsLmFkZERlcHRoU3RlbmNpbChcclxuICAgICAgICAgICAgICAgIGBTaGFkb3dEZXB0aCR7aWR9YCxcclxuICAgICAgICAgICAgICAgIEZvcm1hdC5ERVBUSF9TVEVOQ0lMLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlncy5zaGFkb3dNYXBTaXplLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLnNoYWRvd01hcFNpemUueSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNwb3QtbGlnaHQgc2hhZG93IG1hcHNcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2luZ2xlRm9yd2FyZFJhZGlhbmNlUGFzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLl9jb25maWdzLm1vYmlsZU1heFNwb3RMaWdodFNoYWRvd01hcHM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gY291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBTcG90U2hhZG93TWFwJHtpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ3Muc2hhZG93TWFwRm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLnNoYWRvd01hcFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29uZmlncy5zaGFkb3dNYXBTaXplLnksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBwcGwuYWRkRGVwdGhTdGVuY2lsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgU3BvdFNoYWRvd0RlcHRoJHtpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1hdC5ERVBUSF9TVEVOQ0lMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLnNoYWRvd01hcFNpemUueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29uZmlncy5zaGFkb3dNYXBTaXplLnksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIFBvc3QgUHJvY2Vzc1xyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gRGVwdGhPZkZpZWxkXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZURPRikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFsZldpZHRoID0gTWF0aC5tYXgoTWF0aC5mbG9vcih3aWR0aCAvIDIpLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBNYXRoLm1heChNYXRoLmZsb29yKGhlaWdodCAvIDIpLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGBEb2ZDb2Mke2lkfWAgdGV4dHVyZSB3aWxsIHJldXNlIGxkckNvbG9yTmFtZVxyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgRG9mUmFkaWFuY2Uke2lkfWAsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgRG9mUHJlZmlsdGVyJHtpZH1gLCB0aGlzLl9jYW1lcmFDb25maWdzLnJhZGlhbmNlRm9ybWF0LCBoYWxmV2lkdGgsIGhhbGZIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcHBsLmFkZFJlbmRlclRhcmdldChgRG9mQm9rZWgke2lkfWAsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIGhhbGZXaWR0aCwgaGFsZkhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyVGFyZ2V0KGBEb2ZGaWx0ZXIke2lkfWAsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIGhhbGZXaWR0aCwgaGFsZkhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQmxvb20gKEthd2FzZSBEdWFsIEZpbHRlcilcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlQmxvb20pIHtcclxuICAgICAgICAgICAgICAgIGxldCBibG9vbVdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmxvb21IZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gc2V0dGluZ3MuYmxvb20uaXRlcmF0aW9ucyArIDE7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb29tV2lkdGggPSBNYXRoLm1heChNYXRoLmZsb29yKGJsb29tV2lkdGggLyAyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvb21IZWlnaHQgPSBNYXRoLm1heChNYXRoLmZsb29yKGJsb29tSGVpZ2h0IC8gMiksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYEJsb29tVGV4JHtpZH1fJHtpfWAsIHRoaXMuX2NhbWVyYUNvbmZpZ3MucmFkaWFuY2VGb3JtYXQsIGJsb29tV2lkdGgsIGJsb29tSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDb2xvciBHcmFkaW5nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUNvbG9yR3JhZGluZyAmJiBzZXR0aW5ncy5jb2xvckdyYWRpbmcubWF0ZXJpYWwgJiYgc2V0dGluZ3MuY29sb3JHcmFkaW5nLmNvbG9yR3JhZGluZ01hcCkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuY29sb3JHcmFkaW5nLm1hdGVyaWFsLnNldFByb3BlcnR5KFxyXG4gICAgICAgICAgICAgICAgICAgICdjb2xvckdyYWRpbmdNYXAnLCBzZXR0aW5ncy5jb2xvckdyYWRpbmcuY29sb3JHcmFkaW5nTWFwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBGWEFBXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUZYQUEgJiYgdGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJUYXJnZXQoYEFhQ29sb3Ike2lkfWAsIEZvcm1hdC5SR0JBOCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dXAoY2FtZXJhczogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhW10sIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUpOiB2b2lkIHtcclxuICAgICAgICAgICAgLy8gVE9ETyh6aG91emhlbmdsb25nKTogTWFrZSBkZWZhdWx0IGVmZmVjdCBhc3NldCBsb2FkaW5nIGVhcmxpZXIgYW5kIHJlbW92ZSBfaW5pdE1hdGVyaWFsc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5pdE1hdGVyaWFscyhwcGwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmVuZGVyIGNhbWVyYXNcclxuICAgICAgICAgICAgLy8gbG9nKGA9PT09PT09PT09PT09PT09PT09PSBPbmUgRnJhbWUgPT09PT09PT09PT09PT09PT09PT1gKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjYW1lcmEgb2YgY2FtZXJhcykge1xyXG4gICAgICAgICAgICAgICAgLy8gU2tpcCBpbnZhbGlkIGNhbWVyYVxyXG4gICAgICAgICAgICAgICAgaWYgKCFjYW1lcmEuc2NlbmUgfHwgIWNhbWVyYS53aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFNldHVwIGNhbWVyYSBjb25maWdzXHJcbiAgICAgICAgICAgICAgICBzZXR1cENhbWVyYUNvbmZpZ3MoY2FtZXJhLCB0aGlzLl9jb25maWdzLCB0aGlzLl9jYW1lcmFDb25maWdzKTtcclxuICAgICAgICAgICAgICAgIC8vIGxvZyhgU2V0dXAgY2FtZXJhOiAke2NhbWVyYS5ub2RlIS5uYW1lfSwgd2luZG93OiAke2NhbWVyYS53aW5kb3cucmVuZGVyV2luZG93SWR9LCBpc0Z1bGw6ICR7dGhpcy5fY2FtZXJhQ29uZmlncy51c2VGdWxsUGlwZWxpbmV9LCBgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKyBgc2l6ZTogJHtjYW1lcmEud2luZG93LndpZHRofXgke2NhbWVyYS53aW5kb3cuaGVpZ2h0fWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BpcGVsaW5lRXZlbnQuZW1pdChQaXBlbGluZUV2ZW50VHlwZS5SRU5ERVJfQ0FNRVJBX0JFR0lOLCBjYW1lcmEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIHBpcGVsaW5lXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy51c2VGdWxsUGlwZWxpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWlsZEZvcndhcmRQaXBlbGluZShwcGwsIGNhbWVyYSwgY2FtZXJhLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRTaW1wbGVQaXBlbGluZShwcGwsIGNhbWVyYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGlwZWxpbmVFdmVudC5lbWl0KFBpcGVsaW5lRXZlbnRUeXBlLlJFTkRFUl9DQU1FUkFfRU5ELCBjYW1lcmEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gUGlwZWxpbmVzXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkU2ltcGxlUGlwZWxpbmUoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KE1hdGguZmxvb3IoY2FtZXJhLndpbmRvdy53aWR0aCksIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChNYXRoLmZsb29yKGNhbWVyYS53aW5kb3cuaGVpZ2h0KSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yTmFtZSA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuY29sb3JOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBkZXB0aFN0ZW5jaWxOYW1lID0gdGhpcy5fY2FtZXJhQ29uZmlncy5kZXB0aFN0ZW5jaWxOYW1lO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBjYW1lcmEudmlld3BvcnQ7ICAvLyBSZWR1Y2UgQysrL1RTIGludGVyb3BcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQubGVmdCA9IE1hdGgucm91bmQodmlld3BvcnQueCAqIHdpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQudG9wID0gTWF0aC5yb3VuZCh2aWV3cG9ydC55ICogaGVpZ2h0KTtcclxuICAgICAgICAgICAgLy8gSGVyZSB3ZSBtdXN0IHVzZSBjYW1lcmEudmlld3BvcnQud2lkdGggaW5zdGVhZCBvZiBjYW1lcmEudmlld3BvcnQueiwgd2hpY2hcclxuICAgICAgICAgICAgLy8gaXMgdW5kZWZpbmVkIG9uIG5hdGl2ZSBwbGF0Zm9ybS4gVGhlIHNhbWUgYXMgY2FtZXJhLnZpZXdwb3J0LmhlaWdodC5cclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQud2lkdGggPSBNYXRoLm1heChNYXRoLnJvdW5kKHZpZXdwb3J0LndpZHRoICogd2lkdGgpLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQuaGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5yb3VuZCh2aWV3cG9ydC5oZWlnaHQgKiBoZWlnaHQpLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29sb3IgPSBjYW1lcmEuY2xlYXJDb2xvcjsgIC8vIFJlZHVjZSBDKysvVFMgaW50ZXJvcFxyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnggPSBjbGVhckNvbG9yLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueSA9IGNsZWFyQ29sb3IueTtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJDb2xvci56ID0gY2xlYXJDb2xvci56O1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLncgPSBjbGVhckNvbG9yLnc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJpbmQgb3V0cHV0IHJlbmRlciB0YXJnZXRcclxuICAgICAgICAgICAgaWYgKGZvcndhcmROZWVkQ2xlYXJDb2xvcihjYW1lcmEpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5MT0FELCBTdG9yZU9wLlNUT1JFKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBkZXB0aCBzdGVuY2lsIGJ1ZmZlclxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhLmNsZWFyRmxhZyAmIENsZWFyRmxhZ0JpdC5ERVBUSF9TVEVOQ0lMKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRPcC5DTEVBUixcclxuICAgICAgICAgICAgICAgICAgICBTdG9yZU9wLkRJU0NBUkQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyRGVwdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyU3RlbmNpbCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuY2xlYXJGbGFnICYgQ2xlYXJGbGFnQml0LkRFUFRIX1NURU5DSUwsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGREZXB0aFN0ZW5jaWwoZGVwdGhTdGVuY2lsTmFtZSwgTG9hZE9wLkxPQUQsIFN0b3JlT3AuRElTQ0FSRCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhc3Muc2V0Vmlld3BvcnQodGhpcy5fdmlld3BvcnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhlIG9wYXF1ZSBxdWV1ZSBpcyB1c2VkIGZvciBSZWZsZWN0aW9uIHByb2JlIHByZXZpZXdcclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSwgU2NlbmVGbGFncy5PUEFRVUUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhlIGJsZW5kIHF1ZXVlIGlzIHVzZWQgZm9yIFVJIGFuZCBHaXptb3NcclxuICAgICAgICAgICAgbGV0IGZsYWdzID0gU2NlbmVGbGFncy5CTEVORCB8IFNjZW5lRmxhZ3MuVUk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVByb2ZpbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncyB8PSBTY2VuZUZsYWdzLlBST0ZJTEVSO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5zaG93U3RhdGlzdGljcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuQkxFTkQpXHJcbiAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLCBmbGFncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9idWlsZEZvcndhcmRQaXBlbGluZShcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIHNjZW5lOiByZW5kZXJlci5SZW5kZXJTY2VuZSxcclxuICAgICAgICApOiB2b2lkIHtcclxuICAgICAgICAgICAgLy8gSW5pdFxyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2V0dGluZ3M7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hdGl2ZVdpZHRoID0gTWF0aC5tYXgoTWF0aC5mbG9vcihjYW1lcmEud2luZG93LndpZHRoKSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hdGl2ZUhlaWdodCA9IE1hdGgubWF4KE1hdGguZmxvb3IoY2FtZXJhLndpbmRvdy5oZWlnaHQpLCAxKTtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heChNYXRoLmZsb29yKG5hdGl2ZVdpZHRoICogdGhpcy5fY2FtZXJhQ29uZmlncy5zaGFkaW5nU2NhbGUpLCAxKVxyXG4gICAgICAgICAgICAgICAgOiBuYXRpdmVXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGVcclxuICAgICAgICAgICAgICAgID8gTWF0aC5tYXgoTWF0aC5mbG9vcihuYXRpdmVIZWlnaHQgKiB0aGlzLl9jYW1lcmFDb25maWdzLnNoYWRpbmdTY2FsZSksIDEpXHJcbiAgICAgICAgICAgICAgICA6IG5hdGl2ZUhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBjYW1lcmEud2luZG93LnJlbmRlcldpbmRvd0lkO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvck5hbWUgPSB0aGlzLl9jYW1lcmFDb25maWdzLmNvbG9yTmFtZTtcclxuICAgICAgICAgICAgY29uc3Qgc2NlbmVEZXB0aCA9IHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlU2hhZGluZ1NjYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBTY2FsZWRTY2VuZURlcHRoJHtpZH1gXHJcbiAgICAgICAgICAgICAgICA6IGBTY2VuZURlcHRoJHtpZH1gO1xyXG4gICAgICAgICAgICBjb25zdCByYWRpYW5jZU5hbWUgPSB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAgICAgPyBgU2NhbGVkUmFkaWFuY2Uke2lkfWBcclxuICAgICAgICAgICAgICAgIDogYFJhZGlhbmNlJHtpZH1gO1xyXG4gICAgICAgICAgICBjb25zdCBsZHJDb2xvck5hbWUgPSB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZVxyXG4gICAgICAgICAgICAgICAgPyBgU2NhbGVkTGRyQ29sb3Ike2lkfWBcclxuICAgICAgICAgICAgICAgIDogYExkckNvbG9yJHtpZH1gO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluTGlnaHQgPSBzY2VuZS5tYWluTGlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBGb3J3YXJkIExpZ2h0aW5nIChMaWdodCBDdWxsaW5nKVxyXG4gICAgICAgICAgICB0aGlzLmZvcndhcmRMaWdodGluZy5jdWxsTGlnaHRzKHNjZW5lLCBjYW1lcmEuZnJ1c3R1bSk7XHJcblxyXG4gICAgICAgICAgICAvLyBNYWluIERpcmVjdGlvbmFsIGxpZ2h0IENTTSBTaGFkb3cgTWFwXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZU1haW5MaWdodFNoYWRvd01hcCkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXJ0KCEhbWFpbkxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZENhc2NhZGVkU2hhZG93TWFwUGFzcyhwcGwsIGlkLCBtYWluTGlnaHQsIGNhbWVyYSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNwb3QgbGlnaHQgc2hhZG93IG1hcHMgKE1vYmlsZSBvciBNU0FBKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5zaW5nbGVGb3J3YXJkUmFkaWFuY2VQYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50bHksIG9ubHkgc3VwcG9ydCAxIHNwb3QgbGlnaHQgd2l0aCBzaGFkb3cgbWFwIG9uIG1vYmlsZSBwbGF0Zm9ybS5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oemhvdXpoZW5nbG9uZyk6IFJlbGV4IHRoaXMgbGltaXRhdGlvbi5cclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yd2FyZExpZ2h0aW5nLmFkZFNwb3RsaWdodFNoYWRvd1Bhc3NlcyhwcGwsIGNhbWVyYSwgdGhpcy5fY29uZmlncy5tb2JpbGVNYXhTcG90TGlnaHRTaGFkb3dNYXBzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fdHJ5QWRkUmVmbGVjdGlvblByb2JlUGFzc2VzKHBwbCwgaWQsIG1haW5MaWdodCwgY2FtZXJhLnNjZW5lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmdcclxuICAgICAgICAgICAgbGV0IGxhc3RQYXNzOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlcjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlUG9zdFByb2Nlc3MpIHsgLy8gUG9zdCBQcm9jZXNzXHJcbiAgICAgICAgICAgICAgICAvLyBSYWRpYW5jZSBhbmQgRG9GXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVET0YpIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoISFzZXR0aW5ncy5kZXB0aE9mRmllbGQubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvZlJhZGlhbmNlTmFtZSA9IGBEb2ZSYWRpYW5jZSR7aWR9YDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIE1TQUEsIGRlcHRoIHN0ZW5jaWwgY2Fubm90IGJlIHJlc29sdmVkIGNyb3NzLXBsYXRmb3JtbHlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRGb3J3YXJkUmFkaWFuY2VQYXNzZXMocHBsLCBpZCwgY2FtZXJhLCB3aWR0aCwgaGVpZ2h0LCBtYWluTGlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvZlJhZGlhbmNlTmFtZSwgc2NlbmVEZXB0aCwgdHJ1ZSwgU3RvcmVPcC5TVE9SRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkRGVwdGhPZkZpZWxkUGFzc2VzKHBwbCwgc2V0dGluZ3MsIHNldHRpbmdzLmRlcHRoT2ZGaWVsZC5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsIGNhbWVyYSwgd2lkdGgsIGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9mUmFkaWFuY2VOYW1lLCBzY2VuZURlcHRoLCByYWRpYW5jZU5hbWUsIGxkckNvbG9yTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZEZvcndhcmRSYWRpYW5jZVBhc3NlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHBsLCBpZCwgY2FtZXJhLCB3aWR0aCwgaGVpZ2h0LCBtYWluTGlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGlhbmNlTmFtZSwgc2NlbmVEZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBCbG9vbVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlQmxvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoISFzZXR0aW5ncy5ibG9vbS5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkS2F3YXNlRHVhbEZpbHRlckJsb29tUGFzc2VzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcGwsIHNldHRpbmdzLCBzZXR0aW5ncy5ibG9vbS5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsIHdpZHRoLCBoZWlnaHQsIHJhZGlhbmNlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBUb25lIE1hcHBpbmcgYW5kIEZYQUFcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUZYQUEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoISFzZXR0aW5ncy5meGFhLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3B5QW5kVG9uZW1hcFBhc3NOZWVkZWQgPSB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUhEUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUNvbG9yR3JhZGluZztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZHJDb2xvckJ1ZmZlck5hbWUgPSBjb3B5QW5kVG9uZW1hcFBhc3NOZWVkZWQgPyBsZHJDb2xvck5hbWUgOiByYWRpYW5jZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRlhBQSBpcyBhcHBsaWVkIGFmdGVyIHRvbmUgbWFwcGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3B5QW5kVG9uZW1hcFBhc3NOZWVkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkQ29weUFuZFRvbmVtYXBQYXNzKHBwbCwgc2V0dGluZ3MsIHdpZHRoLCBoZWlnaHQsIHJhZGlhbmNlTmFtZSwgbGRyQ29sb3JCdWZmZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgRlhBQVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVNoYWRpbmdTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhYUNvbG9yTmFtZSA9IGBBYUNvbG9yJHtpZH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSBGWEFBIG9uIHNjYWxlZCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRGeGFhUGFzcyhwcGwsIHNldHRpbmdzLmZ4YWEubWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCBsZHJDb2xvckJ1ZmZlck5hbWUsIGFhQ29sb3JOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29weSBGWEFBIHJlc3VsdCB0byBzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlRlNSICYmIHNldHRpbmdzLmZzci5tYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgRlNSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFzcyA9IHRoaXMuX2FkZEZzclBhc3MocHBsLCBzZXR0aW5ncywgc2V0dGluZ3MuZnNyLm1hdGVyaWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLCB3aWR0aCwgaGVpZ2h0LCBhYUNvbG9yTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCBjb2xvck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2NhbGUgRlhBQSByZXN1bHQgdG8gc2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFzcyA9IHRoaXMuX2FkZENvcHlQYXNzKHBwbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCBhYUNvbG9yTmFtZSwgY29sb3JOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEltYWdlIG5vdCBzY2FsZWQsIG91dHB1dCBGWEFBIHJlc3VsdCB0byBzY3JlZW4gZGlyZWN0bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhc3MgPSB0aGlzLl9hZGRGeGFhUGFzcyhwcGwsIHNldHRpbmdzLmZ4YWEubWF0ZXJpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCBsZHJDb2xvckJ1ZmZlck5hbWUsIGNvbG9yTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBGWEFBIChTaXplIG1pZ2h0IGJlIHNjYWxlZClcclxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFzcyA9IHRoaXMuX2FkZFRvbmVtYXBSZXNpemVPclN1cGVyUmVzb2x1dGlvblBhc3NlcyhwcGwsIHNldHRpbmdzLCBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGgsIGhlaWdodCwgcmFkaWFuY2VOYW1lLCBsZHJDb2xvck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQsIGNvbG9yTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVIRFIgfHwgdGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVTaGFkaW5nU2NhbGUpIHsgLy8gSERSIG9yIFNjYWxlZCBMRFJcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZEZvcndhcmRSYWRpYW5jZVBhc3NlcyhwcGwsIGlkLCBjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsIGhlaWdodCwgbWFpbkxpZ2h0LCByYWRpYW5jZU5hbWUsIHNjZW5lRGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgbGFzdFBhc3MgPSB0aGlzLl9hZGRUb25lbWFwUmVzaXplT3JTdXBlclJlc29sdXRpb25QYXNzZXMocHBsLCBzZXR0aW5ncywgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsIGhlaWdodCwgcmFkaWFuY2VOYW1lLCBsZHJDb2xvck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlV2lkdGgsIG5hdGl2ZUhlaWdodCwgY29sb3JOYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gTERSIChTaXplIGlzIG5vdCBzY2FsZWQpXHJcbiAgICAgICAgICAgICAgICBsYXN0UGFzcyA9IHRoaXMuX2FkZEZvcndhcmRSYWRpYW5jZVBhc3NlcyhwcGwsIGlkLCBjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlV2lkdGgsIG5hdGl2ZUhlaWdodCwgbWFpbkxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yTmFtZSwgdGhpcy5fY2FtZXJhQ29uZmlncy5kZXB0aFN0ZW5jaWxOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVUkgc2l6ZSBpcyBub3Qgc2NhbGVkLCBkb2VzIG5vdCBoYXZlIEFBXHJcbiAgICAgICAgICAgIHRoaXMuX2FkZFVJUXVldWUoY2FtZXJhLCBsYXN0UGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQ29tbW9uIFBhc3Nlc1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBwcml2YXRlIF9hZGRUb25lbWFwUmVzaXplT3JTdXBlclJlc29sdXRpb25QYXNzZXMoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiBQaXBlbGluZVNldHRpbmdzLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICAgICAgcmFkaWFuY2VOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGxkckNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBuYXRpdmVXaWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICBuYXRpdmVIZWlnaHQ6IG51bWJlcixcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgICAgICBsZXQgbGFzdFBhc3M6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVGU1IgJiYgc2V0dGluZ3MuZnNyLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBGU1JcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZENvcHlBbmRUb25lbWFwUGFzcyhwcGwsIHNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQsIHJhZGlhbmNlTmFtZSwgbGRyQ29sb3JOYW1lKTtcclxuICAgICAgICAgICAgICAgIGxhc3RQYXNzID0gdGhpcy5fYWRkRnNyUGFzcyhwcGwsIHNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmZzci5tYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICBpZCwgd2lkdGgsIGhlaWdodCwgbGRyQ29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZVdpZHRoLCBuYXRpdmVIZWlnaHQsIGNvbG9yTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPdXRwdXQgSERSL0xEUiByZXN1bHQgdG8gc2NyZWVuIGRpcmVjdGx5IChTaXplIG1pZ2h0IGJlIHNjYWxlZClcclxuICAgICAgICAgICAgICAgIGxhc3RQYXNzID0gdGhpcy5fYWRkQ29weUFuZFRvbmVtYXBQYXNzKHBwbCwgc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlV2lkdGgsIG5hdGl2ZUhlaWdodCwgcmFkaWFuY2VOYW1lLCBjb2xvck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBsYXN0UGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2FkZENhc2NhZGVkU2hhZG93TWFwUGFzcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgbGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIER5bmFtaWMgc3RhdGVzXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBwcGwucGlwZWxpbmVTY2VuZURhdGEuc2hhZG93cy5zaXplLng7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHBwbC5waXBlbGluZVNjZW5lRGF0YS5zaGFkb3dzLnNpemUueTtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3BvcnQubGVmdCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0LnRvcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0LndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0LmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gQ1NNIFNoYWRvdyBNYXBcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBjb25zdCBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgcGFzcy5uYW1lID0gJ0Nhc2NhZGVkU2hhZG93TWFwJztcclxuICAgICAgICAgICAgcGFzcy5hZGRSZW5kZXJUYXJnZXQoYFNoYWRvd01hcCR7aWR9YCwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCBuZXcgQ29sb3IoMSwgMSwgMSwgMSkpO1xyXG4gICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChgU2hhZG93RGVwdGgke2lkfWAsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5ESVNDQVJEKTtcclxuICAgICAgICAgICAgY29uc3QgY3NtTGV2ZWwgPSBwcGwucGlwZWxpbmVTY2VuZURhdGEuY3NtU3VwcG9ydGVkID8gbGlnaHQuY3NtTGV2ZWwgOiAxO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHNoYWRvdyBtYXAgdmlld3BvcnRzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGxldmVsID0gMDsgbGV2ZWwgIT09IGNzbUxldmVsOyArK2xldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRDc21NYWluTGlnaHRWaWV3cG9ydChsaWdodCwgd2lkdGgsIGhlaWdodCwgbGV2ZWwsIHRoaXMuX3ZpZXdwb3J0LCB0aGlzLl9jb25maWdzLnNjcmVlblNwYWNlU2lnblkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVldWUgPSBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5OT05FLCAnc2hhZG93LWNhc3RlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jb25maWdzLmlzV2ViR1BVKSB7IC8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBXZWJHUFVcclxuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5zZXRWaWV3cG9ydCh0aGlzLl92aWV3cG9ydCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBxdWV1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTY2VuZShjYW1lcmEsIFNjZW5lRmxhZ3MuT1BBUVVFIHwgU2NlbmVGbGFncy5NQVNLIHwgU2NlbmVGbGFncy5TSEFET1dfQ0FTVEVSKVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VMaWdodEZydXN0dW0obGlnaHQsIGxldmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkQ29weVBhc3MoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICBpbnB1dDogc3RyaW5nLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHN0cmluZyxcclxuICAgICAgICApOiByZW5kZXJpbmcuQmFzaWNSZW5kZXJQYXNzQnVpbGRlciB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnY2MtdG9uZS1tYXBwaW5nJyk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KG91dHB1dCwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkVGV4dHVyZShpbnB1dCwgJ2lucHV0VGV4dHVyZScpO1xyXG4gICAgICAgICAgICBwYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKHRoaXMuX2NvcHlBbmRUb25lbWFwTWF0ZXJpYWwsIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2FkZENvcHlBbmRUb25lbWFwUGFzcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICByYWRpYW5jZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgICAgICBsZXQgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZUNvbG9yR3JhZGluZ1xyXG4gICAgICAgICAgICAgICAgJiYgc2V0dGluZ3MuY29sb3JHcmFkaW5nLm1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICAmJiBzZXR0aW5ncy5jb2xvckdyYWRpbmcuY29sb3JHcmFkaW5nTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsdXRUZXggPSBzZXR0aW5ncy5jb2xvckdyYWRpbmcuY29sb3JHcmFkaW5nTWFwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JHcmFkaW5nVGV4U2l6ZS54ID0gbHV0VGV4LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JHcmFkaW5nVGV4U2l6ZS55ID0gbHV0VGV4LmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NxdWFyZU1hcCA9IGx1dFRleC53aWR0aCA9PT0gbHV0VGV4LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGlmIChpc1NxdWFyZU1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnY2MtY29sb3ItZ3JhZGluZy04eDgnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdjYy1jb2xvci1ncmFkaW5nLW54MScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRSZW5kZXJUYXJnZXQoY29sb3JOYW1lLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkVGV4dHVyZShyYWRpYW5jZU5hbWUsICdzY2VuZUNvbG9yTWFwJyk7XHJcbiAgICAgICAgICAgICAgICBwYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgICAgIHBhc3Muc2V0VmVjMignbHV0VGV4dHVyZVNpemUnLCB0aGlzLl9jb2xvckdyYWRpbmdUZXhTaXplKTtcclxuICAgICAgICAgICAgICAgIHBhc3Muc2V0RmxvYXQoJ2NvbnRyaWJ1dGUnLCBzZXR0aW5ncy5jb2xvckdyYWRpbmcuY29udHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKHNldHRpbmdzLmNvbG9yR3JhZGluZy5tYXRlcmlhbCwgaXNTcXVhcmVNYXAgPyAxIDogMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzID0gcHBsLmFkZFJlbmRlclBhc3Mod2lkdGgsIGhlaWdodCwgJ2NjLXRvbmUtbWFwcGluZycpO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRSZW5kZXJUYXJnZXQoY29sb3JOYW1lLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkVGV4dHVyZShyYWRpYW5jZU5hbWUsICdpbnB1dFRleHR1cmUnKTtcclxuICAgICAgICAgICAgICAgIHBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnRvbmVNYXBwaW5nLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzcy5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoc2V0dGluZ3MudG9uZU1hcHBpbmcubWF0ZXJpYWwsIDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZCh0aGlzLl9jb3B5QW5kVG9uZW1hcE1hdGVyaWFsLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkRm9yd2FyZE1haW5MaWdodFBhc3MoXHJcbiAgICAgICAgICAgIHBhc3M6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsU3RvcmVPcDogZ2Z4LlN0b3JlT3AsXHJcbiAgICAgICAgICAgIG1haW5MaWdodDogcmVuZGVyZXIuc2NlbmUuRGlyZWN0aW9uYWxMaWdodCB8IG51bGwsXHJcbiAgICAgICAgICAgIHNjZW5lOiByZW5kZXJlci5SZW5kZXJTY2VuZSB8IG51bGwgPSBudWxsLFxyXG4gICAgICAgICk6IHZvaWQge1xyXG4gICAgICAgICAgICAvLyBzZXQgdmlld3BvcnRcclxuICAgICAgICAgICAgcGFzcy5zZXRWaWV3cG9ydCh0aGlzLl92aWV3cG9ydCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xvclN0b3JlT3AgPSB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZU1TQUEgPyBTdG9yZU9wLkRJU0NBUkQgOiBTdG9yZU9wLlNUT1JFO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBvdXRwdXQgcmVuZGVyIHRhcmdldFxyXG4gICAgICAgICAgICBpZiAoZm9yd2FyZE5lZWRDbGVhckNvbG9yKGNhbWVyYSkpIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBjb2xvclN0b3JlT3AsIHRoaXMuX2NsZWFyQ29sb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRSZW5kZXJUYXJnZXQoY29sb3JOYW1lLCBMb2FkT3AuTE9BRCwgY29sb3JTdG9yZU9wKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBkZXB0aCBzdGVuY2lsIGJ1ZmZlclxyXG4gICAgICAgICAgICBpZiAoREVCVUcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvck5hbWUgPT09IHRoaXMuX2NhbWVyYUNvbmZpZ3MuY29sb3JOYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGhTdGVuY2lsTmFtZSAhPT0gdGhpcy5fY2FtZXJhQ29uZmlncy5kZXB0aFN0ZW5jaWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FybignRGVmYXVsdCBmcmFtZWJ1ZmZlciBjYW5ub3QgdXNlIGN1c3RvbSBkZXB0aCBzdGVuY2lsIGJ1ZmZlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FtZXJhLmNsZWFyRmxhZyAmIENsZWFyRmxhZ0JpdC5ERVBUSF9TVEVOQ0lMKSB7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZERlcHRoU3RlbmNpbChcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRPcC5DTEVBUixcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aFN0ZW5jaWxTdG9yZU9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5jbGVhckRlcHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5jbGVhclN0ZW5jaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyRmxhZyAmIENsZWFyRmxhZ0JpdC5ERVBUSF9TVEVOQ0lMLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkRGVwdGhTdGVuY2lsKGRlcHRoU3RlbmNpbE5hbWUsIExvYWRPcC5MT0FELCBkZXB0aFN0ZW5jaWxTdG9yZU9wKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHNoYWRvdyBtYXAgaWYgZW5hYmxlZFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FtZXJhQ29uZmlncy5lbmFibGVNYWluTGlnaHRTaGFkb3dNYXApIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkVGV4dHVyZShgU2hhZG93TWFwJHtpZH1gLCAnY2Nfc2hhZG93TWFwJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE8oemhvdXpoZW5nbG9uZyk6IFNlcGFyYXRlIE9QQVFVRSBhbmQgTUFTSyBxdWV1ZVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIG9wYXF1ZSBhbmQgbWFzayBxdWV1ZVxyXG4gICAgICAgICAgICBwYXNzLmFkZFF1ZXVlKFF1ZXVlSGludC5OT05FKSAvLyBDdXJyZW50bHkgd2UgcHV0IE9QQVFVRSBhbmQgTUFTSyBpbnRvIG9uZSBxdWV1ZSwgc28gUXVldWVIaW50IGlzIE5PTkVcclxuICAgICAgICAgICAgICAgIC5hZGRTY2VuZShjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICAgICAgU2NlbmVGbGFncy5PUEFRVUUgfCBTY2VuZUZsYWdzLk1BU0ssXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkxpZ2h0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBzY2VuZSA/IHNjZW5lIDogdW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2FkZERlcHRoT2ZGaWVsZFBhc3NlcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGRvZk1hdGVyaWFsOiBNYXRlcmlhbCxcclxuICAgICAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICBkb2ZSYWRpYW5jZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHJhZGlhbmNlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBsZHJDb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICApOiB2b2lkIHtcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jYXRsaWtlY29kaW5nLmNvbS91bml0eS90dXRvcmlhbHMvYWR2YW5jZWQtcmVuZGVyaW5nL2RlcHRoLW9mLWZpZWxkL1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fY29jUGFyYW1zLnggPSBzZXR0aW5ncy5kZXB0aE9mRmllbGQuZm9jdXNEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5fY29jUGFyYW1zLnkgPSBzZXR0aW5ncy5kZXB0aE9mRmllbGQuZm9jdXNSYW5nZTtcclxuICAgICAgICAgICAgdGhpcy5fY29jUGFyYW1zLnogPSBzZXR0aW5ncy5kZXB0aE9mRmllbGQuYm9rZWhSYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvY1BhcmFtcy53ID0gMC4wO1xyXG4gICAgICAgICAgICB0aGlzLl9jb2NUZXhTaXplLnggPSAxLjAgLyB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fY29jVGV4U2l6ZS55ID0gMS4wIC8gaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLl9jb2NUZXhTaXplLnogPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fY29jVGV4U2l6ZS53ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFsZldpZHRoID0gTWF0aC5tYXgoTWF0aC5mbG9vcih3aWR0aCAvIDIpLCAxKTtcclxuICAgICAgICAgICAgY29uc3QgaGFsZkhlaWdodCA9IE1hdGgubWF4KE1hdGguZmxvb3IoaGVpZ2h0IC8gMiksIDEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29jTmFtZSA9IGxkckNvbG9yTmFtZTtcclxuICAgICAgICAgICAgY29uc3QgcHJlZmlsdGVyTmFtZSA9IGBEb2ZQcmVmaWx0ZXIke2lkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJva2VoTmFtZSA9IGBEb2ZCb2tlaCR7aWR9YDtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyTmFtZSA9IGBEb2ZGaWx0ZXIke2lkfWA7XHJcblxyXG4gICAgICAgICAgICAvLyBDb0NcclxuICAgICAgICAgICAgY29uc3QgY29jUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdjYy1kb2YtY29jJyk7XHJcbiAgICAgICAgICAgIGNvY1Bhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvY05hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICBjb2NQYXNzLmFkZFRleHR1cmUoZGVwdGhTdGVuY2lsLCAnRGVwdGhUZXgnKTtcclxuICAgICAgICAgICAgY29jUGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgdGhpcy5fY29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIGNvY1Bhc3Muc2V0TWF0NCgncHJvaicsIGNhbWVyYS5tYXRQcm9qKTtcclxuICAgICAgICAgICAgY29jUGFzcy5zZXRWZWM0KCdjb2NQYXJhbXMnLCB0aGlzLl9jb2NQYXJhbXMpO1xyXG4gICAgICAgICAgICBjb2NQYXNzXHJcbiAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgIC5hZGRDYW1lcmFRdWFkKGNhbWVyYSwgZG9mTWF0ZXJpYWwsIDApOyAvLyBhZGRDYW1lcmFRdWFkIHdpbGwgc2V0IGNhbWVyYSByZWxhdGVkIFVCT3NcclxuXHJcbiAgICAgICAgICAgIC8vIERvd25zYW1wbGUgYW5kIFByZWZpbHRlclxyXG4gICAgICAgICAgICBjb25zdCBwcmVmaWx0ZXJQYXNzID0gcHBsLmFkZFJlbmRlclBhc3MoaGFsZldpZHRoLCBoYWxmSGVpZ2h0LCAnY2MtZG9mLXByZWZpbHRlcicpO1xyXG4gICAgICAgICAgICBwcmVmaWx0ZXJQYXNzLmFkZFJlbmRlclRhcmdldChwcmVmaWx0ZXJOYW1lLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgcHJlZmlsdGVyUGFzcy5hZGRUZXh0dXJlKGRvZlJhZGlhbmNlTmFtZSwgJ2NvbG9yVGV4Jyk7XHJcbiAgICAgICAgICAgIHByZWZpbHRlclBhc3MuYWRkVGV4dHVyZShjb2NOYW1lLCAnY29jVGV4Jyk7XHJcbiAgICAgICAgICAgIHByZWZpbHRlclBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBwcmVmaWx0ZXJQYXNzLnNldFZlYzQoJ21haW5UZXhUZXhlbFNpemUnLCB0aGlzLl9jb2NUZXhTaXplKTtcclxuICAgICAgICAgICAgcHJlZmlsdGVyUGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoZG9mTWF0ZXJpYWwsIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gQm9rZWggYmx1clxyXG4gICAgICAgICAgICBjb25zdCBib2tlaFBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhoYWxmV2lkdGgsIGhhbGZIZWlnaHQsICdjYy1kb2YtYm9rZWgnKTtcclxuICAgICAgICAgICAgYm9rZWhQYXNzLmFkZFJlbmRlclRhcmdldChib2tlaE5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICBib2tlaFBhc3MuYWRkVGV4dHVyZShwcmVmaWx0ZXJOYW1lLCAncHJlZmlsdGVyVGV4Jyk7XHJcbiAgICAgICAgICAgIGJva2VoUGFzcy5zZXRWZWM0KCdnX3BsYXRmb3JtJywgdGhpcy5fY29uZmlncy5wbGF0Zm9ybSk7XHJcbiAgICAgICAgICAgIGJva2VoUGFzcy5zZXRWZWM0KCdtYWluVGV4VGV4ZWxTaXplJywgdGhpcy5fY29jVGV4U2l6ZSk7XHJcbiAgICAgICAgICAgIGJva2VoUGFzcy5zZXRWZWM0KCdjb2NQYXJhbXMnLCB0aGlzLl9jb2NQYXJhbXMpO1xyXG4gICAgICAgICAgICBib2tlaFBhc3NcclxuICAgICAgICAgICAgICAgIC5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKGRvZk1hdGVyaWFsLCAyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZpbHRlcmluZ1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJQYXNzID0gcHBsLmFkZFJlbmRlclBhc3MoaGFsZldpZHRoLCBoYWxmSGVpZ2h0LCAnY2MtZG9mLWZpbHRlcicpO1xyXG4gICAgICAgICAgICBmaWx0ZXJQYXNzLmFkZFJlbmRlclRhcmdldChmaWx0ZXJOYW1lLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgZmlsdGVyUGFzcy5hZGRUZXh0dXJlKGJva2VoTmFtZSwgJ2Jva2VoVGV4Jyk7XHJcbiAgICAgICAgICAgIGZpbHRlclBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICBmaWx0ZXJQYXNzLnNldFZlYzQoJ21haW5UZXhUZXhlbFNpemUnLCB0aGlzLl9jb2NUZXhTaXplKTtcclxuICAgICAgICAgICAgZmlsdGVyUGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoZG9mTWF0ZXJpYWwsIDMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tYmluZVxyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdjYy1kb2YtY29tYmluZScpO1xyXG4gICAgICAgICAgICBjb21iaW5lUGFzcy5hZGRSZW5kZXJUYXJnZXQocmFkaWFuY2VOYW1lLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3MuYWRkVGV4dHVyZShkb2ZSYWRpYW5jZU5hbWUsICdjb2xvclRleCcpO1xyXG4gICAgICAgICAgICBjb21iaW5lUGFzcy5hZGRUZXh0dXJlKGNvY05hbWUsICdjb2NUZXgnKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3MuYWRkVGV4dHVyZShmaWx0ZXJOYW1lLCAnZmlsdGVyVGV4Jyk7XHJcbiAgICAgICAgICAgIGNvbWJpbmVQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3Muc2V0VmVjNCgnY29jUGFyYW1zJywgdGhpcy5fY29jUGFyYW1zKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3NcclxuICAgICAgICAgICAgICAgIC5hZGRRdWV1ZShRdWV1ZUhpbnQuT1BBUVVFKVxyXG4gICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKGRvZk1hdGVyaWFsLCA0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2FkZEthd2FzZUR1YWxGaWx0ZXJCbG9vbVBhc3NlcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGJsb29tTWF0ZXJpYWw6IE1hdGVyaWFsLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICAgICAgcmFkaWFuY2VOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIC8vIEJhc2VkIG9uIEthd2FzZSBEdWFsIEZpbHRlciBCbHVyLiBTYXZlcyBiYW5kd2lkdGggb24gbW9iaWxlIGRldmljZXMuXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vY29tbXVuaXR5LmFybS5jb20vY2ZzLWZpbGUvX19rZXkvY29tbXVuaXR5c2VydmVyLWJsb2dzLWNvbXBvbmVudHMtd2VibG9nZmlsZXMvMDAtMDAtMDAtMjAtNjYvc2lnZ3JhcGgyMDE1XzJEMDBfbW1nXzJEMDBfbWFyaXVzXzJEMDBfc2xpZGVzLnBkZlxyXG5cclxuICAgICAgICAgICAgLy8gU2l6ZTogW3ByZWZpbHRlcigxLzIpLCBkb3duc2FtcGxlKDEvNCksIGRvd25zYW1wbGUoMS84KSwgZG93bnNhbXBsZSgxLzE2KSwgLi4uXVxyXG4gICAgICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gc2V0dGluZ3MuYmxvb20uaXRlcmF0aW9ucztcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZUNvdW50ID0gaXRlcmF0aW9ucyArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tV2lkdGhzLmxlbmd0aCA9IHNpemVDb3VudDtcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21IZWlnaHRzLmxlbmd0aCA9IHNpemVDb3VudDtcclxuICAgICAgICAgICAgdGhpcy5fYmxvb21XaWR0aHNbMF0gPSBNYXRoLm1heChNYXRoLmZsb29yKHdpZHRoIC8gMiksIDEpO1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9vbUhlaWdodHNbMF0gPSBNYXRoLm1heChNYXRoLmZsb29yKGhlaWdodCAvIDIpLCAxKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgIT09IHNpemVDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9vbVdpZHRoc1tpXSA9IE1hdGgubWF4KE1hdGguZmxvb3IodGhpcy5fYmxvb21XaWR0aHNbaSAtIDFdIC8gMiksIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvb21IZWlnaHRzW2ldID0gTWF0aC5tYXgoTWF0aC5mbG9vcih0aGlzLl9ibG9vbUhlaWdodHNbaSAtIDFdIC8gMiksIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBCbG9vbSB0ZXh0dXJlIG5hbWVzXHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tVGV4TmFtZXMubGVuZ3RoID0gc2l6ZUNvdW50O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gc2l6ZUNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb29tVGV4TmFtZXNbaV0gPSBgQmxvb21UZXgke2lkfV8ke2l9YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0dXAgYmxvb20gcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9vbVBhcmFtcy54ID0gdGhpcy5fY29uZmlncy51c2VGbG9hdE91dHB1dCA/IDEgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9vbVBhcmFtcy54ID0gMDsgLy8gdW51c2VkXHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tUGFyYW1zLnogPSBzZXR0aW5ncy5ibG9vbS50aHJlc2hvbGQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb29tUGFyYW1zLncgPSBzZXR0aW5ncy5ibG9vbS5lbmFibGVBbHBoYU1hc2sgPyAxIDogMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZWZpbHRlciBwYXNzXHJcbiAgICAgICAgICAgIGNvbnN0IHByZWZpbHRlclBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh0aGlzLl9ibG9vbVdpZHRoc1swXSwgdGhpcy5fYmxvb21IZWlnaHRzWzBdLCAnY2MtYmxvb20tcHJlZmlsdGVyJyk7XHJcbiAgICAgICAgICAgIHByZWZpbHRlclBhc3MuYWRkUmVuZGVyVGFyZ2V0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvb21UZXhOYW1lc1swXSxcclxuICAgICAgICAgICAgICAgIExvYWRPcC5DTEVBUixcclxuICAgICAgICAgICAgICAgIFN0b3JlT3AuU1RPUkUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHJlZmlsdGVyUGFzcy5hZGRUZXh0dXJlKHJhZGlhbmNlTmFtZSwgJ2lucHV0VGV4dHVyZScpO1xyXG4gICAgICAgICAgICBwcmVmaWx0ZXJQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgcHJlZmlsdGVyUGFzcy5zZXRWZWM0KCdibG9vbVBhcmFtcycsIHRoaXMuX2Jsb29tUGFyYW1zKTtcclxuICAgICAgICAgICAgcHJlZmlsdGVyUGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoYmxvb21NYXRlcmlhbCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEb3duc2FtcGxlIHBhc3Nlc1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSAhPT0gc2l6ZUNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvd25QYXNzID0gcHBsLmFkZFJlbmRlclBhc3ModGhpcy5fYmxvb21XaWR0aHNbaV0sIHRoaXMuX2Jsb29tSGVpZ2h0c1tpXSwgJ2NjLWJsb29tLWRvd25zYW1wbGUnKTtcclxuICAgICAgICAgICAgICAgIGRvd25QYXNzLmFkZFJlbmRlclRhcmdldCh0aGlzLl9ibG9vbVRleE5hbWVzW2ldLCBMb2FkT3AuQ0xFQVIsIFN0b3JlT3AuU1RPUkUsIHRoaXMuX2NsZWFyQ29sb3JUcmFuc3BhcmVudEJsYWNrKTtcclxuICAgICAgICAgICAgICAgIGRvd25QYXNzLmFkZFRleHR1cmUodGhpcy5fYmxvb21UZXhOYW1lc1tpIC0gMV0sICdibG9vbVRleHR1cmUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb29tVGV4U2l6ZS54ID0gdGhpcy5fYmxvb21XaWR0aHNbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvb21UZXhTaXplLnkgPSB0aGlzLl9ibG9vbUhlaWdodHNbaSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgZG93blBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgZG93blBhc3Muc2V0VmVjNCgnYmxvb21UZXhTaXplJywgdGhpcy5fYmxvb21UZXhTaXplKTtcclxuICAgICAgICAgICAgICAgIGRvd25QYXNzXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKGJsb29tTWF0ZXJpYWwsIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBVcHNhbXBsZSBwYXNzZXNcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGl0ZXJhdGlvbnM7IGktLSA+IDA7KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cFBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh0aGlzLl9ibG9vbVdpZHRoc1tpXSwgdGhpcy5fYmxvb21IZWlnaHRzW2ldLCAnY2MtYmxvb20tdXBzYW1wbGUnKTtcclxuICAgICAgICAgICAgICAgIHVwUGFzcy5hZGRSZW5kZXJUYXJnZXQodGhpcy5fYmxvb21UZXhOYW1lc1tpXSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgICAgICB1cFBhc3MuYWRkVGV4dHVyZSh0aGlzLl9ibG9vbVRleE5hbWVzW2kgKyAxXSwgJ2Jsb29tVGV4dHVyZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvb21UZXhTaXplLnggPSB0aGlzLl9ibG9vbVdpZHRoc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9vbVRleFNpemUueSA9IHRoaXMuX2Jsb29tSGVpZ2h0c1tpICsgMV07XHJcbiAgICAgICAgICAgICAgICB1cFBhc3Muc2V0VmVjNCgnZ19wbGF0Zm9ybScsIHRoaXMuX2NvbmZpZ3MucGxhdGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgdXBQYXNzLnNldFZlYzQoJ2Jsb29tVGV4U2l6ZScsIHRoaXMuX2Jsb29tVGV4U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB1cFBhc3NcclxuICAgICAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoYmxvb21NYXRlcmlhbCwgMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENvbWJpbmUgcGFzc1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdjYy1ibG9vbS1jb21iaW5lJyk7XHJcbiAgICAgICAgICAgIGNvbWJpbmVQYXNzLmFkZFJlbmRlclRhcmdldChyYWRpYW5jZU5hbWUsIExvYWRPcC5MT0FELCBTdG9yZU9wLlNUT1JFKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3MuYWRkVGV4dHVyZSh0aGlzLl9ibG9vbVRleE5hbWVzWzBdLCAnYmxvb21UZXh0dXJlJyk7XHJcbiAgICAgICAgICAgIGNvbWJpbmVQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgY29tYmluZVBhc3Muc2V0VmVjNCgnYmxvb21QYXJhbXMnLCB0aGlzLl9ibG9vbVBhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvbWJpbmVQYXNzXHJcbiAgICAgICAgICAgICAgICAuYWRkUXVldWUoUXVldWVIaW50LkJMRU5EKVxyXG4gICAgICAgICAgICAgICAgLmFkZEZ1bGxzY3JlZW5RdWFkKGJsb29tTWF0ZXJpYWwsIDMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkRnNyUGFzcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IFBpcGVsaW5lU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGZzck1hdGVyaWFsOiBNYXRlcmlhbCxcclxuICAgICAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGxkckNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBuYXRpdmVXaWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICBuYXRpdmVIZWlnaHQ6IG51bWJlcixcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgICAgICB0aGlzLl9mc3JUZXhTaXplLnggPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fZnNyVGV4U2l6ZS55ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLl9mc3JUZXhTaXplLnogPSBuYXRpdmVXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fZnNyVGV4U2l6ZS53ID0gbmF0aXZlSGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLl9mc3JQYXJhbXMueCA9IGNsYW1wKDEuMCAtIHNldHRpbmdzLmZzci5zaGFycG5lc3MsIDAuMDIsIDAuOTgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZnNyQ29sb3JOYW1lID0gYEZzckNvbG9yJHtpZH1gO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWFzdVBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCAnY2MtZnNyLWVhc3UnKTtcclxuICAgICAgICAgICAgZWFzdVBhc3MuYWRkUmVuZGVyVGFyZ2V0KGZzckNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgIGVhc3VQYXNzLmFkZFRleHR1cmUobGRyQ29sb3JOYW1lLCAnb3V0cHV0UmVzdWx0TWFwJyk7XHJcbiAgICAgICAgICAgIGVhc3VQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgZWFzdVBhc3Muc2V0VmVjNCgnZnNyVGV4U2l6ZScsIHRoaXMuX2ZzclRleFNpemUpO1xyXG4gICAgICAgICAgICBlYXN1UGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoZnNyTWF0ZXJpYWwsIDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmNhc1Bhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyhuYXRpdmVXaWR0aCwgbmF0aXZlSGVpZ2h0LCAnY2MtZnNyLXJjYXMnKTtcclxuICAgICAgICAgICAgcmNhc1Bhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkNMRUFSLCBTdG9yZU9wLlNUT1JFLCB0aGlzLl9jbGVhckNvbG9yVHJhbnNwYXJlbnRCbGFjayk7XHJcbiAgICAgICAgICAgIHJjYXNQYXNzLmFkZFRleHR1cmUoZnNyQ29sb3JOYW1lLCAnb3V0cHV0UmVzdWx0TWFwJyk7XHJcbiAgICAgICAgICAgIHJjYXNQYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgcmNhc1Bhc3Muc2V0VmVjNCgnZnNyVGV4U2l6ZScsIHRoaXMuX2ZzclRleFNpemUpO1xyXG4gICAgICAgICAgICByY2FzUGFzcy5zZXRWZWM0KCdmc3JQYXJhbXMnLCB0aGlzLl9mc3JQYXJhbXMpO1xyXG4gICAgICAgICAgICByY2FzUGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5PUEFRVUUpXHJcbiAgICAgICAgICAgICAgICAuYWRkRnVsbHNjcmVlblF1YWQoZnNyTWF0ZXJpYWwsIDEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJjYXNQYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkRnhhYVBhc3MoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIGZ4YWFNYXRlcmlhbDogTWF0ZXJpYWwsXHJcbiAgICAgICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICBsZHJDb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgICAgICB0aGlzLl9meGFhUGFyYW1zLnggPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fZnhhYVBhcmFtcy55ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLl9meGFhUGFyYW1zLnogPSAxIC8gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX2Z4YWFQYXJhbXMudyA9IDEgLyBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnY2MtZnhhYScpO1xyXG4gICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgU3RvcmVPcC5TVE9SRSwgdGhpcy5fY2xlYXJDb2xvclRyYW5zcGFyZW50QmxhY2spO1xyXG4gICAgICAgICAgICBwYXNzLmFkZFRleHR1cmUobGRyQ29sb3JOYW1lLCAnc2NlbmVDb2xvck1hcCcpO1xyXG4gICAgICAgICAgICBwYXNzLnNldFZlYzQoJ2dfcGxhdGZvcm0nLCB0aGlzLl9jb25maWdzLnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgcGFzcy5zZXRWZWM0KCd0ZXhTaXplJywgdGhpcy5fZnhhYVBhcmFtcyk7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUXVldWUoUXVldWVIaW50Lk9QQVFVRSlcclxuICAgICAgICAgICAgICAgIC5hZGRGdWxsc2NyZWVuUXVhZChmeGFhTWF0ZXJpYWwsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2FkZFVJUXVldWUoY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsIHBhc3M6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGxldCBmbGFncyA9IFNjZW5lRmxhZ3MuVUk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZVByb2ZpbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncyB8PSBTY2VuZUZsYWdzLlBST0ZJTEVSO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5zaG93U3RhdGlzdGljcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFzc1xyXG4gICAgICAgICAgICAgICAgLmFkZFF1ZXVlKFF1ZXVlSGludC5CTEVORCwgJ2RlZmF1bHQnLCAnZGVmYXVsdCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLCBmbGFncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gRm9yd2FyZFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBwcml2YXRlIF9hZGRGb3J3YXJkUmFkaWFuY2VQYXNzZXMoXHJcbiAgICAgICAgICAgIHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsXHJcbiAgICAgICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGNhbWVyYTogcmVuZGVyZXIuc2NlbmUuQ2FtZXJhLFxyXG4gICAgICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGlzYWJsZU1TQUE6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsU3RvcmVPcDogZ2Z4LlN0b3JlT3AgPSBTdG9yZU9wLkRJU0NBUkQsXHJcbiAgICAgICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIER5bmFtaWMgc3RhdGVzXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gUHJlcGFyZSBjYW1lcmEgY2xlYXIgY29sb3JcclxuICAgICAgICAgICAgY29uc3QgY2xlYXJDb2xvciA9IGNhbWVyYS5jbGVhckNvbG9yOyAvLyBSZWR1Y2UgQysrL1RTIGludGVyb3BcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJDb2xvci54ID0gY2xlYXJDb2xvci54O1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnkgPSBjbGVhckNvbG9yLnk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyQ29sb3IueiA9IGNsZWFyQ29sb3IuejtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJDb2xvci53ID0gY2xlYXJDb2xvci53O1xyXG5cclxuICAgICAgICAgICAgLy8gUHJlcGFyZSBjYW1lcmEgdmlld3BvcnRcclxuICAgICAgICAgICAgY29uc3Qgdmlld3BvcnQgPSBjYW1lcmEudmlld3BvcnQ7IC8vIFJlZHVjZSBDKysvVFMgaW50ZXJvcFxyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC5sZWZ0ID0gTWF0aC5yb3VuZCh2aWV3cG9ydC54ICogd2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC50b3AgPSBNYXRoLnJvdW5kKHZpZXdwb3J0LnkgKiBoZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyBIZXJlIHdlIG11c3QgdXNlIGNhbWVyYS52aWV3cG9ydC53aWR0aCBpbnN0ZWFkIG9mIGNhbWVyYS52aWV3cG9ydC56LCB3aGljaFxyXG4gICAgICAgICAgICAvLyBpcyB1bmRlZmluZWQgb24gbmF0aXZlIHBsYXRmb3JtLiBUaGUgc2FtZSBhcyBjYW1lcmEudmlld3BvcnQuaGVpZ2h0LlxyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC53aWR0aCA9IE1hdGgubWF4KE1hdGgucm91bmQodmlld3BvcnQud2lkdGggKiB3aWR0aCksIDEpO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydC5oZWlnaHQgPSBNYXRoLm1heChNYXRoLnJvdW5kKHZpZXdwb3J0LmhlaWdodCAqIGhlaWdodCksIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gTVNBQVxyXG4gICAgICAgICAgICBjb25zdCBlbmFibGVNU0FBID0gIWRpc2FibGVNU0FBICYmIHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlTVNBQTtcclxuICAgICAgICAgICAgYXNzZXJ0KCFlbmFibGVNU0FBIHx8IHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2luZ2xlRm9yd2FyZFJhZGlhbmNlUGFzcyk7XHJcblxyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKE1haW4gRGlyZWN0aW9uYWwgTGlnaHQpXHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgY29uc3QgcGFzcyA9IHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2luZ2xlRm9yd2FyZFJhZGlhbmNlUGFzc1xyXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9hZGRGb3J3YXJkU2luZ2xlUmFkaWFuY2VQYXNzKHBwbCwgaWQsIGNhbWVyYSwgZW5hYmxlTVNBQSwgd2lkdGgsIGhlaWdodCwgbWFpbkxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yTmFtZSwgZGVwdGhTdGVuY2lsTmFtZSwgZGVwdGhTdGVuY2lsU3RvcmVPcClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5fYWRkRm9yd2FyZE11bHRpcGxlUmFkaWFuY2VQYXNzZXMocHBsLCBpZCwgY2FtZXJhLCB3aWR0aCwgaGVpZ2h0LCBtYWluTGlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lLCBkZXB0aFN0ZW5jaWxOYW1lLCBkZXB0aFN0ZW5jaWxTdG9yZU9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBsYW5hciBTaGFkb3dcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlTWFpbkxpZ2h0UGxhbmFyU2hhZG93TWFwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBsYW5hclNoYWRvd1F1ZXVlKGNhbWVyYSwgbWFpbkxpZ2h0LCBwYXNzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBGb3J3YXJkIExpZ2h0aW5nIChCbGVuZClcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAvLyBBZGQgdHJhbnNwYXJlbnQgcXVldWVcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lRmxhZ3MgPSBTY2VuZUZsYWdzLkJMRU5EIHxcclxuICAgICAgICAgICAgICAgIChjYW1lcmEuZ2VvbWV0cnlSZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgICAgID8gU2NlbmVGbGFncy5HRU9NRVRSWVxyXG4gICAgICAgICAgICAgICAgICAgIDogU2NlbmVGbGFncy5OT05FKTtcclxuXHJcbiAgICAgICAgICAgIHBhc3NcclxuICAgICAgICAgICAgICAgIC5hZGRRdWV1ZShRdWV1ZUhpbnQuQkxFTkQpXHJcbiAgICAgICAgICAgICAgICAuYWRkU2NlbmUoY2FtZXJhLCBzY2VuZUZsYWdzLCBtYWluTGlnaHQgfHwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfYWRkRm9yd2FyZFNpbmdsZVJhZGlhbmNlUGFzcyhcclxuICAgICAgICAgICAgcHBsOiByZW5kZXJpbmcuQmFzaWNQaXBlbGluZSxcclxuICAgICAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgICAgY2FtZXJhOiByZW5kZXJlci5zY2VuZS5DYW1lcmEsXHJcbiAgICAgICAgICAgIGVuYWJsZU1TQUE6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICBtYWluTGlnaHQ6IHJlbmRlcmVyLnNjZW5lLkRpcmVjdGlvbmFsTGlnaHQgfCBudWxsLFxyXG4gICAgICAgICAgICBjb2xvck5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkZXB0aFN0ZW5jaWxTdG9yZU9wOiBnZnguU3RvcmVPcFxyXG4gICAgICAgICk6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyIHtcclxuICAgICAgICAgICAgYXNzZXJ0KHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2luZ2xlRm9yd2FyZFJhZGlhbmNlUGFzcyk7XHJcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgLy8gRm9yd2FyZCBMaWdodGluZyAoTWFpbiBEaXJlY3Rpb25hbCBMaWdodClcclxuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICBsZXQgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXI7XHJcbiAgICAgICAgICAgIGlmIChlbmFibGVNU0FBKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtc2FhUmFkaWFuY2VOYW1lID0gYE1zYWFSYWRpYW5jZSR7aWR9YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1zYWFEZXB0aFN0ZW5jaWxOYW1lID0gYE1zYWFEZXB0aFN0ZW5jaWwke2lkfWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYW1wbGVDb3VudCA9IHRoaXMuX2NhbWVyYUNvbmZpZ3Muc2V0dGluZ3MubXNhYS5zYW1wbGVDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtc1Bhc3MgPSBwcGwuYWRkTXVsdGlzYW1wbGVSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsIHNhbXBsZUNvdW50LCAwLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICAgICAgbXNQYXNzLm5hbWUgPSAnTXNhYUZvcndhcmRQYXNzJztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNU0FBIGFsd2F5cyBkaXNjYXJkcyBkZXB0aCBzdGVuY2lsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWlsZEZvcndhcmRNYWluTGlnaHRQYXNzKG1zUGFzcywgaWQsIGNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICBtc2FhUmFkaWFuY2VOYW1lLCBtc2FhRGVwdGhTdGVuY2lsTmFtZSwgU3RvcmVPcC5ESVNDQVJELCBtYWluTGlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1zUGFzcy5yZXNvbHZlUmVuZGVyVGFyZ2V0KG1zYWFSYWRpYW5jZU5hbWUsIGNvbG9yTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFzcyA9IG1zUGFzcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICAgICAgcGFzcy5uYW1lID0gJ0ZvcndhcmRQYXNzJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWlsZEZvcndhcmRNYWluTGlnaHRQYXNzKHBhc3MsIGlkLCBjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lLCBkZXB0aFN0ZW5jaWxOYW1lLCBkZXB0aFN0ZW5jaWxTdG9yZU9wLCBtYWluTGlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFzc2VydChwYXNzICE9PSB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9yd2FyZCBMaWdodGluZyAoQWRkaXRpdmUgTGlnaHRzKVxyXG4gICAgICAgICAgICB0aGlzLmZvcndhcmRMaWdodGluZy5hZGRMaWdodFF1ZXVlcyhcclxuICAgICAgICAgICAgICAgIHBhc3MsXHJcbiAgICAgICAgICAgICAgICBjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdzLm1vYmlsZU1heFNwb3RMaWdodFNoYWRvd01hcHMsXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGFzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGFkZFBsYW5hclNoYWRvd1F1ZXVlKFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICAgICAgcGFzczogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHBhc3MuYWRkUXVldWUoUXVldWVIaW50LkJMRU5ELCAncGxhbmFyLXNoYWRvdycpXHJcbiAgICAgICAgICAgICAgICAuYWRkU2NlbmUoXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLFxyXG4gICAgICAgICAgICAgICAgICAgIFNjZW5lRmxhZ3MuU0hBRE9XX0NBU1RFUiB8IFNjZW5lRmxhZ3MuUExBTkFSX1NIQURPVyB8IFNjZW5lRmxhZ3MuQkxFTkQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkxpZ2h0IHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgX2FkZEZvcndhcmRNdWx0aXBsZVJhZGlhbmNlUGFzc2VzKFxyXG4gICAgICAgICAgICBwcGw6IHJlbmRlcmluZy5CYXNpY1BpcGVsaW5lLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1haW5MaWdodDogcmVuZGVyZXIuc2NlbmUuRGlyZWN0aW9uYWxMaWdodCB8IG51bGwsXHJcbiAgICAgICAgICAgIGNvbG9yTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBkZXB0aFN0ZW5jaWxOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbFN0b3JlT3A6IGdmeC5TdG9yZU9wXHJcbiAgICAgICAgKTogcmVuZGVyaW5nLkJhc2ljUmVuZGVyUGFzc0J1aWxkZXIge1xyXG4gICAgICAgICAgICBhc3NlcnQoIXRoaXMuX2NhbWVyYUNvbmZpZ3Muc2luZ2xlRm9yd2FyZFJhZGlhbmNlUGFzcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBGb3J3YXJkIExpZ2h0aW5nIChNYWluIERpcmVjdGlvbmFsIExpZ2h0KVxyXG4gICAgICAgICAgICBsZXQgcGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIHBhc3MubmFtZSA9ICdGb3J3YXJkUGFzcyc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFN0b3JlT3AgPSB0aGlzLmZvcndhcmRMaWdodGluZy5pc011bHRpcGxlTGlnaHRQYXNzZXNOZWVkZWQoKVxyXG4gICAgICAgICAgICAgICAgPyBTdG9yZU9wLlNUT1JFXHJcbiAgICAgICAgICAgICAgICA6IGRlcHRoU3RlbmNpbFN0b3JlT3A7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9idWlsZEZvcndhcmRNYWluTGlnaHRQYXNzKHBhc3MsIGlkLCBjYW1lcmEsXHJcbiAgICAgICAgICAgICAgICBjb2xvck5hbWUsIGRlcHRoU3RlbmNpbE5hbWUsIGZpcnN0U3RvcmVPcCwgbWFpbkxpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvcndhcmQgTGlnaHRpbmcgKEFkZGl0aXZlIExpZ2h0cylcclxuICAgICAgICAgICAgcGFzcyA9IHRoaXMuZm9yd2FyZExpZ2h0aW5nXHJcbiAgICAgICAgICAgICAgICAuYWRkTGlnaHRQYXNzZXMoY29sb3JOYW1lLCBkZXB0aFN0ZW5jaWxOYW1lLCBkZXB0aFN0ZW5jaWxTdG9yZU9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkLCB3aWR0aCwgaGVpZ2h0LCBjYW1lcmEsIHRoaXMuX3ZpZXdwb3J0LCBwcGwsIHBhc3MpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9idWlsZFJlZmxlY3Rpb25Qcm9iZVBhc3MoXHJcbiAgICAgICAgICAgIHBhc3M6IHJlbmRlcmluZy5CYXNpY1JlbmRlclBhc3NCdWlsZGVyLFxyXG4gICAgICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjYW1lcmE6IHJlbmRlcmVyLnNjZW5lLkNhbWVyYSxcclxuICAgICAgICAgICAgY29sb3JOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbE5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgbWFpbkxpZ2h0OiByZW5kZXJlci5zY2VuZS5EaXJlY3Rpb25hbExpZ2h0IHwgbnVsbCxcclxuICAgICAgICAgICAgc2NlbmU6IHJlbmRlcmVyLlJlbmRlclNjZW5lIHwgbnVsbCA9IG51bGwsXHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIC8vIHNldCB2aWV3cG9ydFxyXG4gICAgICAgICAgICBjb25zdCBjb2xvclN0b3JlT3AgPSB0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZU1TQUEgPyBTdG9yZU9wLkRJU0NBUkQgOiBTdG9yZU9wLlNUT1JFO1xyXG5cclxuICAgICAgICAgICAgLy8gYmluZCBvdXRwdXQgcmVuZGVyIHRhcmdldFxyXG4gICAgICAgICAgICBpZiAoZm9yd2FyZE5lZWRDbGVhckNvbG9yKGNhbWVyYSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmxlY3Rpb25Qcm9iZUNsZWFyQ29sb3IueCA9IGNhbWVyYS5jbGVhckNvbG9yLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWZsZWN0aW9uUHJvYmVDbGVhckNvbG9yLnkgPSBjYW1lcmEuY2xlYXJDb2xvci55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGlvblByb2JlQ2xlYXJDb2xvci56ID0gY2FtZXJhLmNsZWFyQ29sb3IuejtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFyQ29sb3IgPSByZW5kZXJpbmcucGFja1JHQkUodGhpcy5fcmVmbGVjdGlvblByb2JlQ2xlYXJDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnggPSBjbGVhckNvbG9yLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnkgPSBjbGVhckNvbG9yLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLnogPSBjbGVhckNvbG9yLno7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckNvbG9yLncgPSBjbGVhckNvbG9yLnc7XHJcbiAgICAgICAgICAgICAgICBwYXNzLmFkZFJlbmRlclRhcmdldChjb2xvck5hbWUsIExvYWRPcC5DTEVBUiwgY29sb3JTdG9yZU9wLCB0aGlzLl9jbGVhckNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkUmVuZGVyVGFyZ2V0KGNvbG9yTmFtZSwgTG9hZE9wLkxPQUQsIGNvbG9yU3RvcmVPcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGJpbmQgZGVwdGggc3RlbmNpbCBidWZmZXJcclxuICAgICAgICAgICAgaWYgKGNhbWVyYS5jbGVhckZsYWcgJiBDbGVhckZsYWdCaXQuREVQVEhfU1RFTkNJTCkge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGREZXB0aFN0ZW5jaWwoXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGhTdGVuY2lsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBMb2FkT3AuQ0xFQVIsXHJcbiAgICAgICAgICAgICAgICAgICAgU3RvcmVPcC5ESVNDQVJELFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5jbGVhckRlcHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5jbGVhclN0ZW5jaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmNsZWFyRmxhZyAmIENsZWFyRmxhZ0JpdC5ERVBUSF9TVEVOQ0lMLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhc3MuYWRkRGVwdGhTdGVuY2lsKGRlcHRoU3RlbmNpbE5hbWUsIExvYWRPcC5MT0FELCBTdG9yZU9wLkRJU0NBUkQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgc2hhZG93IG1hcCBpZiBlbmFibGVkXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW1lcmFDb25maWdzLmVuYWJsZU1haW5MaWdodFNoYWRvd01hcCkge1xyXG4gICAgICAgICAgICAgICAgcGFzcy5hZGRUZXh0dXJlKGBTaGFkb3dNYXAke2lkfWAsICdjY19zaGFkb3dNYXAnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETyh6aG91emhlbmdsb25nKTogU2VwYXJhdGUgT1BBUVVFIGFuZCBNQVNLIHF1ZXVlXHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgb3BhcXVlIGFuZCBtYXNrIHF1ZXVlXHJcbiAgICAgICAgICAgIHBhc3MuYWRkUXVldWUoUXVldWVIaW50Lk5PTkUsICdyZWZsZWN0LW1hcCcpIC8vIEN1cnJlbnRseSB3ZSBwdXQgT1BBUVVFIGFuZCBNQVNLIGludG8gb25lIHF1ZXVlLCBzbyBRdWV1ZUhpbnQgaXMgTk9ORVxyXG4gICAgICAgICAgICAgICAgLmFkZFNjZW5lKGNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICBTY2VuZUZsYWdzLk9QQVFVRSB8IFNjZW5lRmxhZ3MuTUFTSyB8IFNjZW5lRmxhZ3MuUkVGTEVDVElPTl9QUk9CRSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluTGlnaHQgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lID8gc2NlbmUgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfdHJ5QWRkUmVmbGVjdGlvblByb2JlUGFzc2VzKHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUsIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG1haW5MaWdodDogcmVuZGVyZXIuc2NlbmUuRGlyZWN0aW9uYWxMaWdodCB8IG51bGwsXHJcbiAgICAgICAgICAgIHNjZW5lOiByZW5kZXJlci5SZW5kZXJTY2VuZSB8IG51bGwsXHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZmxlY3Rpb25Qcm9iZU1hbmFnZXIgPSBjY2xlZ2FjeS5pbnRlcm5hbC5yZWZsZWN0aW9uUHJvYmVNYW5hZ2VyIGFzIFJlZmxlY3Rpb25Qcm9iZU1hbmFnZXIgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmICghcmVmbGVjdGlvblByb2JlTWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2JlcyA9IHJlZmxlY3Rpb25Qcm9iZU1hbmFnZXIuZ2V0UHJvYmVzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFByb2JlQ291bnQgPSA0O1xyXG4gICAgICAgICAgICBsZXQgcHJvYmVJRCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvYmUgb2YgcHJvYmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb2JlLm5lZWRSZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZWEgPSBwcm9iZS5yZW5kZXJBcmVhKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KE1hdGguZmxvb3IoYXJlYS54KSwgMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChNYXRoLmZsb29yKGFyZWEueSksIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9iZS5wcm9iZVR5cGUgPT09IHJlbmRlcmVyLnNjZW5lLlByb2JlVHlwZS5QTEFOQVIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NhbWVyYUNvbmZpZ3MuZW5hYmxlUGxhbmFyUmVmbGVjdGlvblByb2JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3c6IHJlbmRlcmVyLlJlbmRlcldpbmRvdyA9IHByb2JlLnJlYWx0aW1lUGxhbmFyVGV4dHVyZSEud2luZG93ITtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvck5hbWUgPSBgUGxhbmFyUHJvYmVSVCR7cHJvYmVJRH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcHRoU3RlbmNpbE5hbWUgPSBgUGxhbmFyUHJvYmVEUyR7cHJvYmVJRH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFByb2JlUmVzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICBwcGwuYWRkUmVuZGVyV2luZG93KGNvbG9yTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgd2lkdGgsIGhlaWdodCwgd2luZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBwcGwuYWRkRGVwdGhTdGVuY2lsKGRlcHRoU3RlbmNpbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdmeC5Gb3JtYXQuREVQVEhfU1RFTkNJTCwgd2lkdGgsIGhlaWdodCwgUmVzb3VyY2VSZXNpZGVuY3kuTUVNT1JZTEVTUyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2JlUGFzcyA9IHBwbC5hZGRSZW5kZXJQYXNzKHdpZHRoLCBoZWlnaHQsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvYmVQYXNzLm5hbWUgPSBgUGxhbmFyUmVmbGVjdGlvblByb2JlJHtwcm9iZUlEfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRSZWZsZWN0aW9uUHJvYmVQYXNzKHByb2JlUGFzcywgaWQsIHByb2JlLmNhbWVyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JOYW1lLCBkZXB0aFN0ZW5jaWxOYW1lLCBtYWluTGlnaHQsIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoRURJVE9SKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZmFjZUlkeCA9IDA7IGZhY2VJZHggPCBwcm9iZS5iYWtlZEN1YmVUZXh0dXJlcy5sZW5ndGg7IGZhY2VJZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9iZS51cGRhdGVDYW1lcmFEaXIoZmFjZUlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvdzogcmVuZGVyZXIuUmVuZGVyV2luZG93ID0gcHJvYmUuYmFrZWRDdWJlVGV4dHVyZXNbZmFjZUlkeF0ud2luZG93ITtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3JOYW1lID0gYEN1YmVQcm9iZVJUJHtwcm9iZUlEfSR7ZmFjZUlkeH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXB0aFN0ZW5jaWxOYW1lID0gYEN1YmVQcm9iZURTJHtwcm9iZUlEfSR7ZmFjZUlkeH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm9iZVJlc291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBwbC5hZGRSZW5kZXJXaW5kb3coY29sb3JOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FtZXJhQ29uZmlncy5yYWRpYW5jZUZvcm1hdCwgd2lkdGgsIGhlaWdodCwgd2luZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHBsLmFkZERlcHRoU3RlbmNpbChkZXB0aFN0ZW5jaWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2Z4LkZvcm1hdC5ERVBUSF9TVEVOQ0lMLCB3aWR0aCwgaGVpZ2h0LCBSZXNvdXJjZVJlc2lkZW5jeS5NRU1PUllMRVNTKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9iZVBhc3MgPSBwcGwuYWRkUmVuZGVyUGFzcyh3aWR0aCwgaGVpZ2h0LCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9iZVBhc3MubmFtZSA9IGBDdWJlUHJvYmUke3Byb2JlSUR9JHtmYWNlSWR4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkUmVmbGVjdGlvblByb2JlUGFzcyhwcm9iZVBhc3MsIGlkLCBwcm9iZS5jYW1lcmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvck5hbWUsIGRlcHRoU3RlbmNpbE5hbWUsIG1haW5MaWdodCwgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcm9iZS5uZWVkUmVuZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICArK3Byb2JlSUQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvYmVJRCA9PT0gbWF4UHJvYmVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pbml0TWF0ZXJpYWxzKHBwbDogcmVuZGVyaW5nLkJhc2ljUGlwZWxpbmUpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXR1cFBpcGVsaW5lQ29uZmlncyhwcGwsIHRoaXMuX2NvbmZpZ3MpO1xyXG5cclxuICAgICAgICAgICAgLy8gV2hlbiBhZGQgbmV3IGVmZmVjdCBhc3NldCwgcGxlYXNlIGFkZCBpdHMgdXVpZCB0byB0aGUgZGVwZW5kZW50QXNzZXRzIGluIGNjLmNvbmZpZy5qc29uLlxyXG4gICAgICAgICAgICB0aGlzLl9jb3B5QW5kVG9uZW1hcE1hdGVyaWFsLl91dWlkID0gYGJ1aWx0aW4tcGlwZWxpbmUtdG9uZS1tYXBwaW5nLW1hdGVyaWFsYDtcclxuICAgICAgICAgICAgdGhpcy5fY29weUFuZFRvbmVtYXBNYXRlcmlhbC5pbml0aWFsaXplKHsgZWZmZWN0TmFtZTogJ3BpcGVsaW5lL3Bvc3QtcHJvY2Vzcy90b25lLW1hcHBpbmcnIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvcHlBbmRUb25lbWFwTWF0ZXJpYWwuZWZmZWN0QXNzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxpemVkID8gMCA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcmluZy5zZXRDdXN0b21QaXBlbGluZSgnQnVpbHRpbicsIG5ldyBCdWlsdGluUGlwZWxpbmVCdWlsZGVyKCkpO1xyXG5cclxufSAvLyBpZiAocmVuZGVyaW5nKVxyXG4iXX0=