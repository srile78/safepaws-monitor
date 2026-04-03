export interface Recall {
    recall_number: string;
    reason_for_recall: string;
    status: string;
    distribution_pattern: string;
    product_description: string;
    report_date: string;
    classification: string;
    brand_name: string;
    // Fields from real FDA OpenFDA API data
    image?: string;
    severity?: string;
    recalling_firm?: string;
    pet_type?: string;
    city?: string;
    state?: string;
    voluntary_mandated?: string;
    recall_initiation_date?: string;
}
