class V1::EventsController < ApiController
  respond_to :json
  before_action :set_event, only: [:show, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @events = eager_event.all
  end

  # GET /events/1
  # GET /events/1.json
  def show
  end

  # POST /events
  # POST /events.json
  def create
    result = Event::CreateEvent.perform(event_context)

    respond_to do |format|
      if result.success?
        @event = result.event
        format.json { render action: 'show', status: :created }
      else
        format.json { render json: { :errors => result.errors.full_messages }, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.json { head :no_content }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = eager_event.find(params[:id])
    end

    def eager_event
      Event.includes(:primary_focus, :secondary_focus, :tags, :organization, :picture)
    end

    def event_context
      {:event_params => event_params, :user => current_user}
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:cost, :description, :held_at, :held_on, :location, :seats, :tag_list, :title, :primary_focus_id, :secondary_focus_id, :event_type, :scope_ids, :picture_id, {:organization_attributes => [:name, :id]})
    end
end
