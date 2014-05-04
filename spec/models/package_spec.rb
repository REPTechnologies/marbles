require 'spec_helper'

describe Package do
  it "has a valid factory" do
    expect(build(:package)).to be_valid
  end
end
