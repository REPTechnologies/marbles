Rails.application.config.assets.precompile += %w( devise.js )
Rails.application.config.assets.precompile << /\.(?:svg|eot|woff|ttf)\z/
