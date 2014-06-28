class Event::CreateEvent
  include Interactor

  def setup
    event_params[:tag_list] = event_params[:tag_list].split(',') unless event_params[:tag_list].nil?
    event_params[:picture] = Picture.find(event_params.delete :picture_id) unless event_params[:picture_id].nil?
    event_params.delete :organization_attributes unless event_params[:organization_id].nil?
    event_params[:organization_attributes][:owner_id] = current_user_id unless event_params[:organization_attributes].nil?
    event_params[:organization_attributes][:user_ids] << current_user_id unless event_params[:organization_attributes].nil?
  end

  def perform
    context[:event] = Event.new(event_params)
    event.save
    fail! errors: event.errors unless event.valid?
  end
  
  private

    def event_params
      context[:event_params]
    end
  
    def current_user_id
      context[:user].id
    end
end
