class V1::PicturesController < ApplicationController
  respond_to :json
  before_action :set_picture, only: [:show, :update, :destroy]

  # GET /pictures
  # GET /pictures.json
  def index
    @pictures = Picture.all
  end

  # GET /pictures/1
  # GET /pictures/1.json
  def show
  end

  # POST /pictures
  # POST /pictures.json
  def create
    result = Picture::CreatePicture.perform(picture_params)

    respond_to do |format|
      if result.success?
        @picture = result.picture
        format.json { render action: 'show', status: :created }
      else
        format.json { render json: { :errors => result.errors.full_messages }, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pictures/1
  # PATCH/PUT /pictures/1.json
  def update
    respond_to do |format|
      if @picture.update(picture_params)
        format.json { head :no_content }
      else
        format.json { render json: @picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pictures/1
  # DELETE /pictures/1.json
  def destroy
    @picture.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_picture
      @picture = Picture.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def picture_params
      params.require(:picture).permit(:image)
    end
end
