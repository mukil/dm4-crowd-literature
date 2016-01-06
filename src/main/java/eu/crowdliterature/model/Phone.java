package eu.crowdliterature.model;

import de.deepamehta.core.JSONEnabled;

import org.codehaus.jettison.json.JSONObject;



public class Phone implements JSONEnabled {

    // ---------------------------------------------------------------------------------------------- Instance Variables

    private JSONObject json;

    // ---------------------------------------------------------------------------------------------------- Constructors

    public Phone(String label, String number) {
        try {
            json = new JSONObject()
                .put("label",  label)
                .put("number", number);
        } catch (Exception e) {
            throw new RuntimeException("Serialization failed (" + this + ")", e);
        }
    }

    // -------------------------------------------------------------------------------------------------- Public Methods

    @Override
    public JSONObject toJSON() {
        return json;
    }
}
