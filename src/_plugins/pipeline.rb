require 'jekyll_asset_pipeline'

module JekyllAssetPipeline

  # process SCSS files
  class SassConverter < JekyllAssetPipeline::Converter

    Compass.configuration.sass_dir = 'src/assets/sass'
    Compass.configuration.images_dir = 'src/assets/images'
    Compass.configuration.fonts_dir = 'src/assets/fonts'

    Compass.configuration.http_images_dir = 'assets/images'

    Compass.sass_engine_options[:load_paths].each do |path|
      Sass.load_paths << path
    end

    def self.filetype
      '.scss'
    end

    def convert
      Sass::Engine.new(@content, syntax: :scss).render
    end
  end

=begin
  class CssCompressor < JekyllAssetPipeline::Compressor
    require 'yui/compressor'

    def self.filetype
      '.css'
    end

    def compress
      YUI::CssCompressor.new.compress(@content)
    end
  end
=end

end
