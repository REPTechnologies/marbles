class V1::TagsController < ApplicationController
  respond_to :json
  
  LIMIT = 8

  def index
    @more = ActsAsTaggableOn::Tag.where("lower(name) LIKE ?", "%#{term.downcase}%").count > LIMIT
    @tags = ActsAsTaggableOn::Tag.where("lower(name) LIKE ?", "%#{term.downcase}%").limit(LIMIT).order(:name)
  end
    
  private
  
    def term
      params.require(:term)
    end

    def tag_params
      params.permit(:term, :page)
    end

end